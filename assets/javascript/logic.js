//* Get reference to HTML elements *\\

const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const timerElement = document.getElementById("time");
const questionsContainer = document.getElementById("questions");
const questionsTitle = document.getElementById("questions-title");
const choicesContainer = document.getElementById("choices");
const endScreen = document.getElementById("end-scren");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const correctSound = new Audio("./assets/sfx/correct.wav");
const incorrectSound = new Audio("./assets/sfx/incorrect/wav");

//* Initalise variables *//

let currentQuestioniNDEX = 0;
let score = 0;
let time = 60;
let timer ;

//* Add event listener to start the button to begin the quiz *\\

startButton.addEventListener("click", startQuiz);

//* Function to start the quiz *\\
function startQuiz () {
    //* Hide start screen and show questions *\\
    startScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");
    showQuestions();
    startTimer();
}
//* Functions to display a qeustion *\\
function showQuestion() {
    //* Retrieve current question and options *\\
    const { question, options } = questions[currentQuestionIndex];
    //* Display question title *\\
    questionsTitle.innerText = question;
    //* Clear previous choices *\\
    choicesContainer.innerHTML = '';
    //* Create buttons for each option *\\
    options.forEach((option, i) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("choice-btn");
        //* Add event listener to check answer when button is clicked *\\
        button.addEventListener("click", () => checkAnswer(i));
        choicesContainer.appendChild(button);
    });
}


//* Function to check selected answer *// 
function checkAnswer(index) {
    const { options, correctAnswer } = questions[currentQuestionIndex];
    if (options[index] == correctAnswer) {
        score++;
        correctSound.play();
        showFeedback("Correct");
    } else {
        time -= 10;
        incorrectSound.play();
        showFeedback("Wrong Answer");
    }
}
//* Move to the next question *\\
if (++currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    endQuiz();
}

//* Function to start the timer *\\ 
function startTimer() {
    timer = setInterval(() => {
        if (time <= 0) {
            endQuiz();
        } else {
            timerElement.textContent = time--;
        }
    }, 1000);
}

//* Function to end the quiz *\\ 
function endQuiz() {
    clearInterval(timer);
    questionsContainer.classList.add("hide");
    endScreen.classList.remove("hide");
    showFeedback("");
    finalScore.innerText = score;
}

//* Function to display feedback *//
function showFeedback(message){
    feedbackElement.innerText = message;
}

//* Add event listener to submit button to save user initials and score, and redirect to highscore page *\\
sibmitButton.addEventListener("click", () => {
    localStorage.setItem("initial", initials.value);
    localStorage.setItem("score", score);
    location.href - "./highscores.html";
});







