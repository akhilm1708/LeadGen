let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question-container');
const answers = [];

function speakText(button) {
    const questionText = button.closest('.question').textContent.trim();
    const speech = new SpeechSynthesisUtterance(questionText);
    speech.lang = 'en-US';
    speech.volume = 80;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function saveAnswer() {
    const currentTextarea = questions[currentQuestionIndex].querySelector('textarea');
    answers[currentQuestionIndex] = currentTextarea.value;
}

function nextQuestion() {
    saveAnswer();
    
    if (currentQuestionIndex < questions.length - 1) {
        questions[currentQuestionIndex].style.display = 'none'; 
        currentQuestionIndex++;
        questions[currentQuestionIndex].style.display = 'block';
    } else {
        saveAnswersToLocalStorage();
        alert('Quiz complete!');
    }
}

function saveAnswersToLocalStorage() {
    localStorage.setItem('answers', JSON.stringify(answers));
}

window.onload = () => {
    questions.forEach((question, index) => {
        if (index !== 0) {
            question.style.display = 'none';
        }
    });
};
