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

    const answer1 = localStorage.getItem('question1')
    const answer2 = localStorage.getItem('question2')
    const answer3 = localStorage.getItem('question3')
    const answer4 = localStorage.getItem('question4')

    console.log("Answer 1:", answer1);
    console.log("Answer 2:", answer2);
    console.log("Answer 3:", answer3);
    console.log("Answer 4:", answer4);
}

