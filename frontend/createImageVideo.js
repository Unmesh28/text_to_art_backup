//document.getElementById('spinner').style.display = 'block';
var name1 = sessionStorage.getItem("name")
var prompts = sessionStorage.getItem("prompts")
//var imageObject = sessionStorage.getItem("imageObject")
//var imageObjectUrl = sessionStorage.getItem("imageObjectUrl")
//var style = sessionStorage.getItem("style")

fetch('http://13.235.215.199:8000/getImage', {
    method: 'GET',
    }).then(response => {
        // handle the response
        console.log("Succcess");
        console.log(response);
        
        //window.open("createImageVideo.html", "_self");
        return response.blob();
    }).then(imageBlob => {
        console.log('Inside Function')  
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
        var imageId = document.getElementById("photo")
        imageId.src = imageObjectURL
    })
    .catch(error => {
        // handle the error
        console.log(error);
        //document.getElementById('spin').style.display = 'none';
    });

// fetch('http://13.235.215.199:8000/getCurrentStyle', {
//     method: 'GET',
//     }).then(response => {
//         // handle the response
//         console.log("Succcess");
//         console.log(response);
        
//         //window.open("createImageVideo.html", "_self");
//         return response.text();
//     }).then(text => {
//         console.log('Inside Function')  
//         console.log(text)
//         //sessionStorage.setItem("style", text);
//         //document.getElementById("style").innerHTML = text;
//     })
//     .catch(error => {
//         // handle the error
//         console.log(error);
//         //document.getElementById('spin').style.display = 'none';
//     });

//console.log(style)

// console.log(name1)
// console.log(prompts)
// console.log(imageObject)
// console.log(imageObjectUrl)


document.getElementById("name").innerHTML = name1;
document.getElementById("prompts").innerHTML = prompts;
//document.getElementById("style").innerHTML = style;
//var imageId = document.getElementById("photo")
//imageId.src = imageObjectUrl;
fetch('http://13.235.215.199:8000/getVideo', {
    method: 'GET',
    }).then(response => {
        // handle the response
        console.log("Succcess");
        console.log(response);
        
        //window.open("createImageVideo.html", "_self");
        return response.blob();
    }).then(imageBlob => {
        console.log('Inside Function')  
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
        var imageId = document.getElementById("video")
        document.getElementById("video").controls = false;
        //document.getElementById('spin').style.display = 'none';
        imageId.src = imageObjectURL
    })
    .catch(error => {
        // handle the error
        console.log(error);
        //document.getElementById('spin').style.display = 'none';
    });


console.log("done")


