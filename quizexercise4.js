var btnStart = document.getElementById("btnStart"); /* Variable used to link the btnStart button */
var score = document.getElementById("score"); /* Variable used to link the score text field */
var btnNext = document.getElementById("btnNext"); /* Variable used to link the btnNext button */
var btnBack = document.getElementById("btnBack"); /* Variable used to link the btnStart button */
var boxes = document.querySelectorAll(".boxAnswer"); /* Variable used to link the box with answers */
var userText = document.getElementById("userText"); /* Variable used to link the userText input */
var questionCount = document.getElementById("questionCount"); /* Variable used to link the question count text field */
var questionsDisplay = document.getElementsByClassName("question"); /* Variable used to link the question text field */
var answerResult = document.getElementsByClassName("answerResult"); /* Variable used to link the answers results text field */
var h1 = document.getElementsByTagName("h2"); /* Variable used to link the h2 heading */
var modeButtons = document.querySelectorAll(".mode"); /* Variable used to link the easy and hard mode button */
var correctAnswer = 2; // get the current correct answer
var answersUpdate = 1; // get the current answer option
var questionUpdate = 0; // get the current question
var count = 1; // count number of questions
var scoreCount = 1; // count the score
var firstName; // variable to store user first name

init(); // load the init function
setupModeButtons(); // load the setupModeButtons function
// funtion to hide some heading and inputs when the game loads
function init() {
h1[0].style.display = "none"; // hide h1 heading (Score)
h1[1].style.display = "none"; // hide h1 heading (Question)
btnNext.style.display ="none"; // hide button next
userText.style.display ="none"; // hide user text input 
btnBack.style.display = "none"; // hide button back
}

/* Empty Array for the hard game mode to store answers */
var storeAnswers = [];

/* Array for the easy game mode */
var quizQuestions = [
    ['How do you write "Hello World" in an alert box?'], // questions
    ['alert("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");'], // options
    ['alert("Hello World");'], // correct answer

    ["How do you create a function in JavaScript?"], // questions
    ["function = myFunction()", "function:myFunction()", "function myFunction()", "function.myFunction()"], // options
    ["function myFunction()"], // correct answer

    ["Inside which HTML element do we put the JavaScript?"], // questions
    ["<script>", "<javascript>", "<js>", "<scripting>"], // options
    ["<script>"], // correct answer
    
    ["Which event occurs when the user clicks on an HTML element?"], // questions
    ["onchange", "onclick", "onmouseclick", "onmouseover"], // options
    ["onclick"], // correct answer

    ["Which HTML tag is used to define an internal style sheet?"], // questions
    ["<style>", "<script>", "<css>", "<internalcss>"], // options
    ["<style>"], // correct answer

    ["Which CSS property is used to change the text color of an element?"], // questions
    ["text-color", "color", "words-color", "color-change"], // options
    ["color"], // correct answer

    ["What is the correct HTML element for the largest heading?"], // questions
    ["<head>", "<h1>", "<heading>", "<h6>"], // options
    ["<h1>"], // correct answer

    ["Which HTML element defines navigation links?"], // questions
    ["<nav>", "<navigate>", "<navbar>", "<navigation>"], // options
    ["<nav>"], // correct answer

    ["How can you add a comment in a JavaScript?"], // questions
    ["<!--Comment-->", "//Comment", "''Comment", "--Comment"], // options
    ["//Comment"] // correct answer
    
];

/* function for the easy game mode */
function setupQuiz() {
// select and display answer options in the box
for (var i = 0; i < boxes.length; i ++) {
    // dispay answers in the boxes
    boxes[i].textContent = quizQuestions[answersUpdate][i];

    // event for when the box is clicked
    boxes[i].addEventListener("click", function() {
    // Compare answers
    if (this.textContent == quizQuestions[correctAnswer][0]) {

    // run this funtion update the game
    correctAnswerUpdate();
    // update question and answers
    for (var i = 0; i < boxes.length; i++) {
    // dispay answers in the boxes
    boxes[i].textContent = quizQuestions[answersUpdate][i];

    // update question
    questionsDisplay[0].textContent = quizQuestions[questionUpdate][0];
    }
    
    // check if answer count is more than 9
    if (count > 9) {
        showResults();
    }

} else {
    // run this funtion update the game
    wrongAnswerUpdate();

    // update question and answers
    for (var i = 0; i < boxes.length; i ++) {
    // dispay answers in the boxes
    boxes[i].textContent = quizQuestions[answersUpdate][i];
    // update question
    questionsDisplay[0].textContent = quizQuestions[questionUpdate][0];
    // event for when the box is clicked

}
    // check if answer count is more than 9
    if (count > 9) {
    showResults();
    }

}

});

}
}

function correctAnswerUpdate() {
    // update the correct answer
    correctAnswer += 3;
    // answers options update
    answersUpdate += 3;
    // question update
    questionUpdate += 3;
    // show if answer is correct or incorrect and chage text colour
    answerResult[0].textContent = "Correct!";
    answerResult[0].style.color = "green";
    // question count
    questionCount.textContent = count++;
    // question count
    score.textContent = scoreCount++;
}

function wrongAnswerUpdate() {
    // update the correct answer
    correctAnswer += 3;
    // answers update
    answersUpdate += 3;
    // question update
    questionUpdate += 3;
    // show if answer is correct or incorrect and change color
    answerResult[0].textContent = "Incorrect!";
    answerResult[0].style.color = "red";
    // question count
    questionCount.textContent = count++;
}


// function for when the game ends
function showResults() {
  // results 
  if (score.textContent === "") {  // check if the score is empty
    h1[1].textContent = "Sorry " + firstName + "! No Badge Archived"; // provide user with feedback
    endGame();
    } else if (score.textContent <= 4){ // check if the score is less or equal to 4
     h1[1].textContent = "Congratulations " + firstName + "! Bronze Badge Archived"; // provide user with feedback
     h1[1].style.color = "#F27127";
     endGame(); // run the endgame function
    }
    else if (score.textContent <= 7) { // check if the score is less or equal to 7
        h1[1].textContent = "Congratulations " + firstName + "! Silver Badge Archived"; // provide user with feedback
        h1[1].style.color = "#BFBFBF";
        endGame();
      } 
      else {
        console.log("Congratulations Gold Badge Archived"); // when none of the above is true
        h1[1].textContent = "Congratulations " + firstName + "! Gold Badge Archived"; // provide user with feedback
        h1[1].style.color = "gold";
        endGame();
      }
}
// function to hide and show some elements in the page
function endGame() {
    btnStart.style.display = "none"; // hide button Start
    btnBack.style.display = "block";  // show back button
    btnNext.style.display ="none"; // hide button next
    userText.style.display ="none"; // hide user text input 
    questionsDisplay[0].style.display = "none"; // hide question field
    answerResult[0].style.display = "none"; // hide answers result field
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display ="none"; // hiddes all the boxes in the home page
    }
}

/* Event for the start button, EASY MODE*/
btnStart.addEventListener("click", function() { /* Run the startGame() function when start button is clicked */
    // ask user name
    userName();
    // run the setupModeButtons function
    setupModeButtons();
    // run the setupQuiz funtion
    setupQuiz();
    // show question number
    questionCount.textContent = count++;
    // show questions
    questionsDisplay[0].textContent = quizQuestions[questionUpdate][0];
    // show score and question heading
    h1[0].style.display = "block";
    h1[1].style.display = "block";
    // hide button Start
    btnStart.style.display = "none";
    // hide button hard and easy
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].style.display = "none";
    }
});

// used to pre-load hard mode with an if statement 
var hardMode = 0;
// HARD GAME MODE CHECK PRE-LOAD / START AND NEXT BUTTON
btnNext.addEventListener("click", function() { /* Run the startGame() function when start button is clicked */
    
    if (hardMode === 0) {
    //  block of code to be executed if the condition is true
    // ask user name
    userName();
    // show questions
    questionsDisplay[0].textContent = quizQuestions[questionUpdate][0];
    // show question number
    questionCount.textContent = count++;
    // show score and question heading
    h1[0].style.display = "block";
    h1[1].style.display = "block";
    // move button next
    btnNext.style.top = "44%";
    // move input text box
    userText.style.top = "34%";
    // move user anwser result down
    answerResult[0].style.margin = "85px 0";
    // make if statment false
    hardMode =+ 1; 
    // change text button
    btnNext.textContent = "NEXT"
    // hide button hard and easy
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].style.display = "none";
    }
        
    } else {
    //  block of code to be executed if the condition is false
    getAnswer(); // run the  getAnswer() funtion
}
});


// function to get the answers for the Hard mode
function getAnswer() { 
// store the user answer in the variable userAnswer
var userAnswer = document.getElementById("userText").value;
// adds the user answers in the empty array called storeAnswers
storeAnswers.push(userAnswer);
// if the user answer is the same as the one in the quizQuestions array
if (userAnswer == quizQuestions[correctAnswer][0]) {
    // answers update
    correctAnswer += 3;
    // question update
    questionUpdate += 3;
    // updates the question that is prensented to the user
    questionsDisplay[0].textContent = quizQuestions[questionUpdate][0];
    // shows the user that the answer is correct in green colour
    answerResult[0].textContent = "Correct!";
    answerResult[0].style.color = "green";
    // question count number update
    questionCount.textContent = count++;
    // score count update
    score.textContent = scoreCount++;
    // clear input text box
    userAnswer.value = '';
    console.log(userAnswer);

    // check if answer count is more than 9
    if (count > 9) {
        showResults();
    }

} else {
    // correct answers update
    correctAnswer += 3;
    // question update
    questionUpdate += 3;
    // updates the question that is prensented to the user
    questionsDisplay[0].textContent = quizQuestions[questionUpdate][0];
    // show that the answer is incorrect in colour red 
    answerResult[0].textContent = "Incorrect!";
    answerResult[0].style.color = "red";
    // question count number update
    questionCount.textContent = count++;
    // clear input text box
    userAnswer.value = '';
    console.log(userAnswer);
} 
    // check if answer count is more than 9
    if (count > 9) {
        showResults();
        }
}

// function for hard and easy button mode
function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() { // add click event for when the button is clicked
			modeButtons[0].classList.remove("selected"); // removes "selected" to the first button
			modeButtons[1].classList.remove("selected"); // removes "selected" to the second button
			this.classList.add("selected"); // adds "selected" to the button clicked
            
            if (this.textContent === "Easy") { // check if the button selected is "Easy"
                //  block of code to be executed if the condition is true
                btnStart.style.display ="block"; // shows the start button for easy mode in the home page
                btnNext.style.display ="none"; // hiddes the start button for hard mode in the home page
                userText.style.display ="none"; // hiddes the user input text in the home page
                for (var i = 0; i < boxes.length; i++) { // loop to select all boxes with answers
                    boxes[i].style.display ="block"; // shows all the boxes in the home page
                }

              } else {
                //  block of code to be executed if the condition is false
                btnStart.style.display ="none"; // hides the start button for easy mode in the home page
                btnNext.style.display ="block"; // shows the start button for hard mode in the home page
                userText.style.display ="block"; // shows the user input text in the home page
                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].style.display ="none"; // hiddes all the boxes in the home page
                }
              }
			
		});
	}
}

// get user name
function userName() {
    firstName = prompt("Please enter your first name"); /* Ask user's first name */
}

// button to rest the game
btnBack.addEventListener("click", function() { 
location.reload(); // reloads the html page
});

