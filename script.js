//My Quiz Questions
var questions = [
    {
        q: "When was the first soda thought to have been made?",
        option1:"Early 1800s",
        option2: "Mid 1800s",
        option3: "Early 1900s",
        option4: "Mid 1900s",           
        correct: "Early 1800s"
    },
    {
        q: "What soda was known to have cocaine in its original formula?",
        option1:"Pepsi Cola",
        option2: "Coca-Cola",
        option3: "Jolt",
        option4: "Dr. Pepper",
        correct: "Coca-Cola"
    },
    {
        q: "What was the name used for a person who worked at a 'soda fountain'?",
        option1:"Soda Clerk",
        option2: "Soda Artist",
        option3: "Soda Puller",
        option4: "Soda Jerk",           
        correct: "Soda Jerk"
    },
    {
        q: "This soda was marketed in the 1960s as an ideal winter drink when warmed and served with lemon:",
        option1:"RC Cola",
        option2: "Dr. Pepper",
        option3: "A&W Root Beer",
        option4: "Sprite",           
        correct: "Dr. Pepper"
           
    },
    {
        q: "During World War II, this German bottling company invented what soda?",
        option1:"Mellow Yellow",
        option2: "Crush",
        option3: "Fanta",
        option4: "Surge",           
        correct: "Fanta"
    },
    ]

var startBtn = document.getElementById("startBtn");
var scoreBtn = document.getElementById("highscoreBtn");
var startContainer = document.getElementById("startContainer");
var countEl = document.getElementById("timer");
var menu = document.getElementById("startMenu");
var questEl = document.getElementById("questionContainer");
var questionLine = document.getElementById("question");
var op1 = document.getElementById("option1");
var op2 = document.getElementById("option2");
var op3 = document.getElementById("option3");
var op4 = document.getElementById("option4");
var timeLeft = 101;
var graded = document.getElementById("answerChecked")
var counter = 0
var maxQuestions = 5;

//eventlisteners go here 
startBtn.addEventListener("click", startQuiz);
scoreBtn.addEventListener("click", highscoreClick);
op1.addEventListener("click", checkAnswer);
op2.addEventListener("click", checkAnswer);
op3.addEventListener("click", checkAnswer);
op4.addEventListener("click", checkAnswer);




function checkAnswer(){
    
    var clickedAnswer = this.textContent;
  
  if (clickedAnswer === questions[counter].correct) {
    counter++
      graded.innerHTML = 'Correct!';
     nextQuestion()
  } else { 
    timeLeft -= 10
    graded.innerHTML = "Try Again!";
  }
  }

  //when is the game finished?? have we passed questions.length??? 
//we need to render our inits page with highscores and add to localStorage
//nav to highscores or render highscores





//when Start is clicked: hide start menu, start timer, and populate first question

function startQuiz() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        countEl.textContent = "Fizz Score: " + timeLeft; 
        

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    menu.classList.add("hide")
    questEl.classList.remove("hide") 
    nextQuestion()
}

//this function will be responsible for cycling thru my questions

function nextQuestion(){
    if (questions.length === 0 || counter >= maxQuestions){
        return window.location.assign("index2.html");  
      }
    
var currentQuestion = questions[counter].q;
var optionOne = questions[counter].option1;
var optionTwo = questions[counter].option2;
var optionThree = questions[counter].option3;
var optionFour = questions[counter].option4;

setTimeout(function(){ 
    graded.innerHTML = '' 
    // nextQuestion
  }, 300);
  
if(counter > questions.length){
      
    questionLine.innerHTML = currentQuestion;
        op1.innerHTML = optionOne;
      op2.innerHTML = optionTwo;
      op3.innerHTML = optionThree;
      op4.innerHTML = optionFour;
      } else {
        console.log("Game Over")
        //render our initials page with button or anchor tag to take us to highscores.
      }
  
questionLine.innerHTML = currentQuestion;
op1.innerHTML = optionOne;
  op2.innerHTML = optionTwo;
  op3.innerHTML = optionThree;
  op4.innerHTML = optionFour;
}



function highscoreClick () {
    console.log("This will take you to the high scores page");
}
