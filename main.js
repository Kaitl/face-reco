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
function modelLoaded(){
    console.log('Model Loaded!')
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bAqkno8mp/model.json', modelLoaded)

console.log('ml5 version:',ml5.version)

function Rawr(){
    img1=document.getElementById('captured_image')
    classifier.classify(img1, getResult)
}

function getResult(error, results){
    if (error) {
        console.error(error)
    } else{
        console.log(results)
        document.getElementById("object").innerHTML="Object: "+results[0].label
        document.getElementById("accuracy").innerHTML="Accuracy:"+results[0].confidence.toFixed(2)
    }
}