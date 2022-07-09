console.log('inside loader')
var name = sessionStorage.getItem("name")
var prompts = sessionStorage.getItem("prompts")

var details = {
    'prompts' : prompts ,
    'make_video' : true
}

var formBody = [];
for (var property in details) {
var encodedKey = encodeURIComponent(property);
var encodedValue = encodeURIComponent(details[property]);
formBody.push(encodedKey + "=" + encodedValue);
}   
formBody = formBody.join("&");

fetch('http://13.235.215.199:8000/generate', {
method: 'POST',
headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
},
body: formBody
}).then(response => {
    // handle the response
    console.log("Succcess");
    console.log(response);
    
    //window.open("createImageVideo.html", "_self");
    return response.blob();
}).then(imageBlob => {
    console.log('Inside Function')  
    //const imageObjectURL = URL.createObjectURL(imageBlob);
    //console.log(imageObjectURL);
    //sessionStorage.setItem("imageObject", imageBlob);
    //sessionStorage.setItem("imageObjectUrl", imageObjectURL);

    

    //document.getElementById('spinner').style.display = 'none';
    window.open("createImageVideo.html", "_self");
})
.catch(error => {
    // handle the error
    console.log(error);
    ///window.open("index.html", "_self");
});

