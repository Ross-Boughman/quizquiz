// finds back and clear buttons on html
const back = document.querySelector("#back-btn");
const clear = document.querySelector("#clear-score");
// gets scores from local storage
const highScores = JSON.parse(localStorage.getItem("userData"));
// finds high scores on html
const highScoresArea = document.querySelector("#high-scores");


// if there are highScores, creates list item for each one
function showScores() {
    if (highScores !== null) {
        let scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        // adds initals and scores, appends to li, adds li to ol
        for (let i = 0; i < highScores.length; i++) {
            let inits = highScores[i].inits;
            let score = highScores[i].userScore
            let scoreItem = document.createElement("li");
            scoreItem.innerHTML = inits + " - " + score;
            scoreList.appendChild(scoreItem);
        }
        // appends created list to html
        highScoresArea.appendChild(scoreList);
    }
};

// call function
showScores();

// event listeners to clear local storage and return to index from score page
clear.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();
});

back.addEventListener("click", function () {
    location.href = "index.html";
});