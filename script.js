
const  myDialog = document.getElementById("myDialog");
const dialogCloseBtn =document.getElementById("dialogClose")



window.addEventListener("load", () => {
       dialogOpen();
       setTimeout(()=>{speaker("Initialising System ..")},1000);

});

const speaker=(text)=>{
       const errorspeech = new SpeechSynthesisUtterance(text); 
       window.speechSynthesis.speak(errorspeech);  
};

const dialogOpen =()=>{
       myDialog.showModal();
}

 const speech =()=>{
       const  textin = document.getElementById("text").value.trim();

        if(textin==""){     
       
       speaker("no input..")
        } else {
              speaker(textin);
        }
 }

const recoder =()=>{

       var recoding = new webkitSpeechRecognition();
       recoding.lang = "en-US";
       recoding.onresult= (event)=>{
              const valuo = event.results[0][0].transcript;
              document.getElementById("text").value=valuo;
              speaker(valuo)
       }
       
       recoding.start();
       console.log("ok")  

}

