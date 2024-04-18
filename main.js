https://teachablemachine.withgoogle.com/models/bAqkno8mp/


Webcam.set({
    width: 400,
    height: 300,
    image_format : 'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function Capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}   
