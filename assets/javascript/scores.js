const userInitials = localStorage.getItem("initial");
const userScores = localStorage.getItem("score");
const clearBtn = document.getElementById("clear");
const highScoreListElement = document.getElementById("highscores");

if (userInitials && userScores) {
    highScoreListElement.innerHTML += `<li>${userInitials} - ${userScores}</li>`;
}

clearBtn.addEventListener("click", () => {
    highScoreListElement.innerHTML = "";
});


