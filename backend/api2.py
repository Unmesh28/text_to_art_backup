import sys
sys.path.append("clipit")

import clipit
import torch
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile, Form, BackgroundTasks
from fastapi.responses import FileResponse
from readWriteStyle import readStyleFromFile, writeStyleToFile

import nest_asyncio
from pyngrok import ngrok
import uvicorn
from styles import getRandomStyle
from googletrans import Translator
# from google_trans_new import google_translator  
# translator = google_translator()  

translator = Translator()
# translator = Translator(service_urls=[
#       'translate.google.cn',
#     ])

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=False,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/')
async def root():
    return {'hello': 'world'}

@app.post("/generate")
async def generate(
        seed: int = Form(None),
        iterations: int = Form(None),
        prompts: str = Form("Underwater City"),
        quality: str = Form("better"),
        aspect: str = Form("square"),
        scale: float = Form(2.5),
        style: str = Form('image'),
        make_video: bool = Form(False),
    ):
    torch.cuda.empty_cache()
    clipit.reset_settings()

    use_pixeldraw = (style == 'Pixel Art')
    use_clipdraw = (style == 'Painting')
    user_prompt = prompts
    # //print(user_prompt+"////////////")
    translation = translator.translate(user_prompt, dest='en')
    #prompts = translation
    print(translation)
    style = getRandomStyle()
    writeStyleToFile(style)
    prompts = (translation.text) + " " + style
    print(prompts+"*************")
    clipit.add_settings(prompts=prompts,
                        seed=seed,
                        iterations=300,
                        aspect=aspect,
                        quality=quality,
                        scale=scale,
                        use_pixeldraw=use_pixeldraw,
                        use_clipdraw=use_clipdraw,
                        make_video=make_video)

    settings = clipit.apply_settings()
    clipit.do_init(settings)
    clipit.do_run(settings)

    return FileResponse('output.png', media_type="image/png")

@app.get('/getVideo')
async def getVideo():
    return FileResponse('output.mp4', media_type="video/mp4")

@app.get('/getImage')
async def getVideo():
    return FileResponse('output.png', media_type="image/png")

@app.get('/getCurrentStyle')
async def getCurrentStyle():
    currentStyle = readStyleFromFile()
    return currentStyle


ngrok_tunnel = ngrok.connect(8000)
print('Public URL:', ngrok_tunnel.public_url)
print('Doc URL:', ngrok_tunnel.public_url+'/docs')
#nest_asyncio.apply()
#uvicorn.run(app, port=8000)
