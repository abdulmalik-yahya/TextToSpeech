const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const userText = document.querySelector('.text').value;
    // console.log(text);
    if (userText.replaceAll(/\s/g, "").length === 0) { // prevent empty submit / or just white spaces
        alert("Please Enter Your Text");
    }
    const userSpeech = new SpeechSynthesisUtterance();
    userSpeech.lang = 'en-US';
    userSpeech.text = userText;
    speechSynthesis.speak(userSpeech);

})