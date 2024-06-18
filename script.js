

window.addEventListener("load", () => {
        const loadspeech = new SpeechSynthesisUtterance();
        loadspeech.text ="Initializing System";
        window.speechSynthesis.speak(loadspeech);
      });
      
 const speech =()=>{
        const text = document.getElementById("text").value;
        if(text==""){     
        const errorspeech = new SpeechSynthesisUtterance();
        errorspeech.text ="no input..";
        window.speechSynthesis.speak(errorspeech);
        

        }
        const convertspeech = new SpeechSynthesisUtterance();
        convertspeech.text=text;
        window.speechSynthesis.speak(convertspeech);
 }