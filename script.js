var startBtn = document.getElementById("startBtn");
var scoreBtn = document.getElementById("highscoreBtn");
var startContainer = document.getElementById("startContainer");
var countEl = document.getElementById("timer");
var menu = document.getElementById("startMenu");



startBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", highscoreClick);

var timeLeft = 200;

function startQuiz() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        countEl.textContent = "Fizz Score: " + timeLeft; 

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    menu.classList.add('hide') 

    console.log("start was clicked");
    
    
}



function answerChoice() {

}

function highscoreClick () {
    console.log("This will take you to the high scores page");
}
