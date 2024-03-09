//* Retrieve user initials and scores from localStorage *\\

const userInitials = localStorgage.getItem("initial");
const userScores = localStorage.getItem("socre");

//* Get reference to the clear button and the highscore list element *\\

const clearBtn = document.getElementById("clear");
const highScoreListElement = document.getElementById("highscores");

//* Display user initials and scores *\\

if (userInitials && userScores) {
    const listItem = document.createElement ("li");
    listItem.textContent = '${userInitials} - ${userScores}';
    highScoreListElement.appendChild (listItem);
}

//* Remove highscore when clear button is clicked *\\

clearBtn.addEventListender("click", function () {
    highScoreListElement.innerHTML = "";
});

