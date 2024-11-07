function speakText(button) {
    const questionText = button.closest('.question').textContent.trim();
    const speech = new SpeechSynthesisUtterance(questionText);
    speech.lang = 'en-US';
    speech.volume = 80;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function saveAnswers() {
    const answers = {
        question1: document.querySelector('textarea[name="leader-quality"]:nth-of-type(1)').value,
        question2: document.querySelector('textarea[name="leader-quality"]:nth-of-type(2)').value,
        question3: document.querySelector('textarea[name="leader-quality"]:nth-of-type(3)').value,
        question4: document.querySelector('textarea[name="leader-quality"]:nth-of-type(4)').value
    };

    localStorage.setItem('question1', answers.question1);
    localStorage.setItem('question2', answers.question2);
    localStorage.setItem('question3', answers.question3);
    localStorage.setItem('question4', answers.question4);
}
