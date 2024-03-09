//* Retrieve user initials and scores from localStorage *\\

const userInitials = localStorgage.getItem("initial");
const userScores = localStorage.getItem("socre");

//* Get reference to the clear button and the highscore list element *\\

const clearBtn = document.getElementById("clear");
const highScoreListElement = document.getElementById("highscores");

//* Display user initials and scores *\\

