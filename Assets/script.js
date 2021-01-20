// Code will build the welcome message this section will build the variables
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var win = document.querySelector(".score");
var timerCount = 75;
var questionIndex = 0;
var questionsDiv = document.querySelector("#questionDiv");
var uList = document.createElement("#ul");

var questions = [ {
  question: "All of the following are data types except:",
  choices: ["strings", "numbers", "prompts", "booleans"],
  answer: "prompts",
},
{
  question: "API stands for:",
  choices: ["Applying Programming Interface", "Application Programming Interface", "Application Prototype Interwebs", "Applying Programing Interwebs"],
  answer: "Application Programming Interface",
},
{
  question: "If you try to change the value of a const variable, you will:",
  choices: ["receive a ReferenceError", "receive a TypeError", "successfully change the value of the const variable", "receive a ReferenceError and a TypeError"],
  answer: "receive a TypeError",
},
{
  question: "______ is used during development and debugging but is usually not seen by the user.",
  choices: ["alert", "function", "console.log", "for loops"],
  answer: "console.log",
},
{
  question: "Variable names have a few rules. For instance, they:",
  choices: ["can start with a number", "are not case-sensitive", "can be a reserved keyword", "should be meaningful"],
  answer: "should be meaningful",
}
];


function startTimer() {
    // Sets timer
    var timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = "Time Left: " + timerCount;

      if (timerCount === 0) {
          clearInterval(timer);
          timerEl.textContent = "Time's up!";
          // function for end of game (including content)
      }
    }, 1000);
  };

//   function loseGame() {
      
//   }

// hide start button, then show questions and available answer choices


function render(questionsDiv) {
  questionsDiv.innerHTML = "";
  uList.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
      var userQuestion = questions[questionIndex].question;
      var userChoices = questions[questionIndex].choices;
      questionsDiv.textContent = userQuestion;
  }
  userChoices.forEach(function (newChoices) {
      var listItem = document.createElement("li");
      listItem.textContent = newChoices;
      questionsDiv.appendChild(uList);
      uList.appendChild(listItem);
      listItem.addEventListener("click", (assess));
  })
}

function assess(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct!";
      } else {
          secondsLeft = secondsLeft - incorrect;
          createDiv.textContent = "Incorrect";
      }

  }
  questionIndex++;

  // when at end question, call function to

startButton.addEventListener("click", function() {
});
  
// To begin quiz, hide html first (only want to do this once, so not within the render function) **within eventListener for startButton To do this, I first need to hide the current content on my webpage. *don't use just a string to make the html content go away -- read toggle docm that Amanda sent

// function render to make questions visible. look at toggle documentation; select the first question in my questions variable, index 0,

// function for assessing correct answers an eventListener using Amanda's HTML eventListener documenation to record their choice, compare that with my answer choice. if matches, add html to say "correct", and record points. if doesn't match, add html to say "incorrect", and deduct time. add one each time through to questionIndex and call render again.


// as user selects answer, hide question/answer, show next question/answer; keeping score with each selection
// function that shows first question + answer choices; index of questions
// click event to record user's answers
// grab answer, check to see if it's correct, if yes, alert via html banner and move on, if not, subtract time, alert via html banner, and move on
// call next function with second question;
// two total functions; need to figure out how to call multiple times without for loop
// <button class="choice" id="A" onclick="checkAnswer('A')"></button>

//   function resetQuiz() {
//     // Resets win and loss counts
//     winCounter = 0;
//     loseCounter = 0;
//     // Renders win and loss counts and sets them into client storage
//     setWins()
//     setLosses()
//   }

//   resetButton.addEventListener("click", resetQuiz);

// append the intro text to the page

// create function that appends text to the page

// create a function that starts the quiz

// create a function that runs the timer

// create a function that records the score

//