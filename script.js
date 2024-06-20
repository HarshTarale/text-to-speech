
const  myDialog = document.getElementById("myDialog");
const dialogCloseBtn =document.getElementById("dialogClose");




document.addEventListener("DOMContentLoaded", () => {
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
dialogCloseBtn.addEventListener("click",()=>{
       speaker("how can  i help you today ")
})

 const speech =()=>{
       const  textin = document.getElementById("text").value.trim();
       imgmic.style.visibility="hidden";
        if(textin==""){     
              speaker("no input..")
        } else {
              speaker(textin);
        }
 }

const recoder =()=>{
       imgmic.style.visibility="visible";
       const recoding = new webkitSpeechRecognition();
       recoding.lang = "en-US";
       recoding.onresult= (event)=>{
              const valuo = event.results[0][0].transcript;
              document.getElementById("text").value=valuo;
              // setTimeout(()=>{
                     imgmic.style.visibility="hidden";
              // },5000)
              speaker(valuo)

       }
       
       recoding.start();
       console.log("ok")  

}


