var startEl = document.getElementById('welcome-start');
var quizBoxEl = document.getElementById('quiz-box');
var questionEl = document.getElementById('question');
var timerEl = document.getElementById('timer');
var startButtEl = document.getElementById('startQuiz');

var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');


var questions = [
  {
  question : "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
  choiceA : "Yes",
  choiceB : "🪵🪵🪵🪵🪵",
  choiceC : "3 wood",
  choiceD : "All of the above",
  correct : "A"
},
{
  question : "Where in the WORLD is Carmen Sandiego?",
  choiceA : "Fargo, ND",
  choiceB : "San Diego, CA",
  choiceC : "Tennessee, NJ",
  choiceD : "🪵🪵🪵🪵🪵",
 correct : "B"
},
{
  question : "🪵🪵🪵 + 🪵🪵 = ?",
  choiceA : "No",
  choiceB : "5 WOOD",
  choiceC : "🪵🪵🪵🪵🪵",
  choiceD : "All of the above",
 correct : "C"
},
{
  question : "What do I LOVE about CODING?",
  choiceA : "Yes",
  choiceB : "🪵🪵🪵🪵🪵",
  choiceC : "The challenge is REWARDING!",
  choiceD : "All of the above",
 correct : "D"
},
]
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var timeLeft = 60;

quizBoxEl.style.display = 'none';
startButtEl.addEventListener('click', startQuiz);
   
function startQuiz() {
  startEl.style.display = 'none';
  showNextQuestion();
  quizBoxEl.style.display = 'block';
  countdown();
  showQuestion();
}

function countdown() {
      var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = "Timer " + timeLeft;
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = "Timer " + timeLeft;
        timeLeft--;
    } else {
       timerEl.textContent = '';
     clearInterval(timeInterval);
      }
    }, 1000);
    };

function showNextQuestion()  {
  let q = questions[runningQuestion];
console.log(q);
questionEl.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
 }

 function showQuestion(question){
  questionEl.style.display = 'block';
 }


//check answer for correct answer
function checkAnswer(answer) {
  if ( answer === questions[runningQuestion].correct) {
    showNextQuestion();
  }else {
    showNextQuestion();
    timeLeft -= 10;
  }
  if(runningQuestion < lastQuestion) {
    runningQuestion++;
    showNextQuestion();
  }else if(lastQuestion === true) {
  }
}
function lastQuestion() {
  console.log('last question');
}
var scoreCardEl = document.getElementById('container');
  
function showScore() {
  scoreCardEl.style.display = 'none';

}
showScore();