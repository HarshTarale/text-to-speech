
const  myDialog = document.getElementById("myDialog");
const dialogCloseBtn =document.getElementById("dialogClose");
const languageSelect_1= document.getElementById("languageSelect_1");
var languageSelect_1value;     //variable globle declare




                     //     window loading function
document.addEventListener("DOMContentLoaded", () => {
       dialogOpen();                    // dialog function call
       setTimeout(()=>{speaker("Initialising System ..")},1000);   //     window loading function after 1s system speak 


});
              //      voice create function
const speaker=(text)=>{
       const errorspeech = new SpeechSynthesisUtterance(text); 
       errorspeech.lang=languageSelect_1value;
       window.speechSynthesis.speak(errorspeech);  
};
                        //dialog function open
const dialogOpen =()=>{
       myDialog.showModal();
}
                           //dialog function close
dialogCloseBtn.addEventListener("click",()=>{
       myDialog.close();
       speaker("how can  i help you today");      
});

                              // language Select function
 languageSelect_1.addEventListener("change",()=>{
       languageSelect_1value= languageSelect_1.value;
  });

                            
 const speech =()=>{
       const  textin = document.getElementById("text").value.trim();
       imgmic.style.visibility="hidden";
        if(textin==""){     
              speaker("no input..")
        } else {
              speaker(textin);
        }
 }


            // recoder function is starting to recodeng and convert to text
const recoder =()=>{
       imgmic.style.visibility="visible";
       const recoding = new webkitSpeechRecognition();
       recoding.lang = languageSelect_1value;
       console.log(languageSelect_1value)
       recoding.onresult= (event)=>{
              const valuo = event.results[0][0].transcript;
              document.getElementById("text").value=valuo;
              imgmic.style.visibility="hidden";
              speaker(valuo)

       }
       
       recoding.start();
       console.log("ok")  

}


