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




