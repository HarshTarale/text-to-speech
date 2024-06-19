
const  myDialog = document.getElementById("myDialog");
const dialogCloseBtn =document.getElementById("dialogClose")
window.addEventListener("load", () => {
       dialogOpen();

setTimeout(()=>{
       console.log("load");
       const errorspeech = new SpeechSynthesisUtterance(); 
       errorspeech.text ="Initialising System ..";
       window.speechSynthesis.speak(errorspeech);    
},1000);
});

const dialogOpen =()=>{
       myDialog.showModal();
}

dialogCloseBtn.addEventListener("click",()=>{
       myDialog.close();
})

 const speech =()=>{
        const text = document.getElementById("text").value.trim();
        if(text==""){     
        const errorspeech = new SpeechSynthesisUtterance();
        errorspeech.text ="no input..";
        window.speechSynthesis.speak(errorspeech);
        }
        const convertspeech = new SpeechSynthesisUtterance();
        convertspeech.text=text;
        window.speechSynthesis.speak(convertspeech);
 }
