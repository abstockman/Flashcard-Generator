var inquirer = require("inquirer");
var basicCards = require("./basicQuestions.js");
var ClozeCard = require("./clozeCard.js");
var clozeCards = require("./clozeQuestions.js")

console.log(clozeQuestionsArray);

// WHAT QUESTION THE USER IS CURRENTLY ON

var currentQuestion = 0;

var intialPrompt = {
  type: 'list',
  message: 'What kind of cards do yo want to use',
  choices: [
    'Basic Flashcards',
    'Cloze Flashcards'
  ],
  name: 'intialpromptChoice'
};

// FUNCTION THAT STARTS THE APP

function app() {
  inquirer.prompt(intialPrompt).then(function(answers) {
    if (answers.intialpromptChoice === 'Basic Flashcards') {
      basicCardQuestions();
    } else {
      clozeCardQuestions();
    }
  });
}

// THIS FUNCTION ASKS THE BASIC CARD QUESTIONS

function basicCardQuestions() {
  inquirer.prompt([{
    message: basicCards[currentQuestion].front + "\nAnswer: ",
    name: 'userGuess',
    type: 'input'
  }]).then(function(answers) {

    // CHECK TO SE IF USERS GUESS IS CORRECT

    if (answers.userGuess.toLowerCase() === basicCards[currentQuestion].back.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
      console.log("Correct Answer: " + basicCards[currentQuestion].back + "\n");
    }

    // ADVANCE TO NEXT QUESTION

    if (currentQuestion < basicCards.length - 1) {
      currentQuestion++;
      basicCardQuestions()
    } else {
      console.log('You\'ve answered all of the questions!');

      // ASK THE USER IF THEY WANT TO TRY AGAIN

      inquirer.prompt([
        {
          type: 'confirm',
          message: 'Would you like to try again?',
          name: 'playAgain'
        }
      ]).then(function (answers) {
        if (answers.playAgain) {

          // RESET THE GAME

          currentQuestion = 0;

          // BEGIN ASKING THE QUESTIONS

          app();
        } else {

          // EXIT GAME

          console.log('Bye!');
        }
      })
    }
  })
}

// ARRAY THAT HOLDS THE CLOZE CARD QUESTIONS

var clozeQuestionsArray = [];

// CREATE THE CLOZECARDS WITH THE MISSING TEXT AND PUSH IT INTO THE ARRAY

for (var i = 0; i < clozeCards.length; i++) {
  var q = new ClozeCard(clozeCards[i].fullText, clozeCards[i].cloze);
  clozeQuestionsArray.push(q);
}

// FUNCTION THAT ASKS THE CLOZE CARD QUESTIONS

function clozeCardQuestions() {
  inquirer.prompt([{
    message: clozeQuestionsArray[currentQuestion].partial + '\nAnswer: ',
    name: 'userGuess',
    type: 'input'
  }]).then(function(answers) {

    // CHECK IF GUESS IS CORRECT

    if (answers.userGuess.toLowerCase() === clozeQuestionsArray[currentQuestion].cloze.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
      console.log('Correct Answer: ' + clozeQuestionsArray[currentQuestion].fullText + '\n');
    }

    // ADVANCE TO NEXT QUESTION

    if (currentQuestion < basicCards.length - 1) {
      currentQuestion++;
      clozeCardQuestions();
    } else {
      console.log('You\'ve answered all of the questions!');

      // PROMPT USER TO PLAY AGAIN

      inquirer.prompt([
        {
          type: 'confirm',
          message: 'Would you like to play again?',
          name: 'playAgain'
        }
      ]).then(function (answers) {
        if (answers.playAgain) {

          // RESET GAME

          currentQuestion = 0;

          // BEGIN ASKING QUESTIONS

          app();
        } else {

          // EXIT GAME

          console.log('Bye!');
        }
      })
    }
  })
}

app();
