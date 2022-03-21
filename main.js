var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if(Content=="selfie"){
        console.log("selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your first selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);

    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
        var synth = window.speechSynthesis;
        speak_data = "taking your second selfie in 10 seconds";
        var utter_this = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
    },5000);

    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        var synth = window.speechSynthesis;
        speak_data = "taking your third selfie in 15 seconds";
        var utter_this = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
    },10000);

    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
    },15000);
    Webcam.attach(camera);
}

Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
}); 
camera = document.getElementById("camera");

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";    
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = "<img id='selfie_image2' src='"+data_uri+"'>";    
        }
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = "<img id='selfie_image3' src='"+data_uri+"'>";    
        }
    });
}