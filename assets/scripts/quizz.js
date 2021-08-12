// List of verb with the proposition in an object. Same list as for memo game
import {
    verbsWithPrepositions
} from './list.js';

// variables 
let verbIndex; // It is just a number. It is the index of the verb that will be used for the quizz as question
let arrayPrepositions; // array should look like something like ["auf", "auf", "an", "von", "mit", ....] it has the length of verbsWithPrepositions
let prepositionsListUnique; // array should look like something like ["auf", "an", "von", "mit", "für", "über"] each preposition appears only once
let preposition1; // should look like "auf". This preposition is the correct one
let preposition2; // a preposition randomly chosen which is different from the preposition1
let preposition3; // a preposition randomly chosen which is different from the preposition1 and the preposition2
const choices = document.querySelectorAll('.choice');
let score = 0;
let questionCounter = 1;
let usedVerb = []; // it is array with the the index of the verbs that have been used. It is to avoid using twice the same verb
let verbsForFeedback = []; // array with the verbs that can be used for feedback

let numChoices = 3
let numQuestions = 8
let limitBiais = 10 // in order to limit the bias that the correct answer would tend to be in the first position then second and less often in the third position

//get a question randomly (get the indexposition in verbsWithPrepositions)
function getVerbIndex() {
    verbIndex = Math.floor(Math.random() * verbsWithPrepositions.length);

    while (usedVerb.includes(verbIndex)) {
        verbIndex = Math.floor(Math.random() * verbsWithPrepositions.length);
    }
    usedVerb.push(verbIndex); // each time a question is used, the index arrives in this array
}
getVerbIndex();

// Display the verb
function displayVerb() {
    document.getElementById("question").innerHTML = verbsWithPrepositions[verbIndex].verb;
}
displayVerb();
  
//make and array with all the prepositions.
function makeArrayPrepositions() {
    arrayPrepositions = [];
    for (let i = 0; i < verbsWithPrepositions.length; i++) {
        arrayPrepositions.push(verbsWithPrepositions[i].preposition);
    }
}
makeArrayPrepositions();

// get the preoposition that will be displayed in the quizz. The first is the good one. The 2 others are randomly chosen.
function getPrepositions() {
    //make a list of the prepositions (each preposition will be only once in this array)
    prepositionsListUnique = Array.from(new Set(arrayPrepositions));

    // Get the good preposition + two other prepositions
    preposition1 = verbsWithPrepositions[verbIndex].preposition;

    preposition2 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)];
    while (preposition1 == preposition2) {
        preposition2 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)];
    }

    preposition3 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)];
    while (preposition3 == preposition1 || preposition3 == preposition2) {
        preposition3 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)];
    }
}
getPrepositions();

// Display prepositions in the quizz
function displayPrepositions() {
    document.getElementsByClassName("choice-text")[0].innerHTML = preposition1;
    document.getElementsByClassName("choice-text")[1].innerHTML = preposition2;
    document.getElementsByClassName("choice-text")[2].innerHTML = preposition3;
}
displayPrepositions();

// display randomly the answers by using the grid as done in the memo game
function randomCardPositionChoices() {
    choices.forEach(choice => {
        let randomPos = Math.floor(Math.random() * numChoices * limitBiais);
        choice.style.order = randomPos;
    });
}
randomCardPositionChoices();

//let the player choose 
function letChoose() {
    choices.forEach(choice => {
        choice.addEventListener('click', responseToTheChoice);
    });
}
letChoose()

//don't let the player choose (after one choice there is a time where we don't want to allow the player to choose again)
function blockChoose() {
    choices.forEach(choice => {
        choice.removeEventListener('click', responseToTheChoice);
    });
}

function responseToTheChoice() {
    // block the answers so the player cannot continue to click
    blockChoose();

    if (this.getAttribute('data-attr') == "correct") {
        this.classList.add("color-correct");
        incrementScore();
        setTimeout(nextQuestion, 2000); // go to the next question
    } else {
        this.classList.add("color-uncorrect");
        setTimeout(feedback, 1000); // feedback will be displayed
    }
}

//feedback when wrong answer
function getVerbsForFeedback() {
    verbsForFeedback = []; // empty the array before filling it (because if there was already a wrong answer, it has data in it)
    for (let i = 0; i < verbsWithPrepositions.length; i++) {
        if (verbsWithPrepositions[i].preposition == preposition1) {
            if (i !== verbIndex) { // it is to avoid to have the verb used as question displayed in feedback
                verbsForFeedback.push(i);
            } 
        } 
    } 
}

function feedback() {
    document.getElementById("wrong").style.visibility = "visible";
    document.getElementById("preposition-feedback").innerHTML = preposition1;

    getVerbsForFeedback();

    let shiftValue;  // "shiftValue" is a value that will permit to not display all the time the same verbs for feedback when more than 4 verbs are available
    let numVerbFeedbackDisplayed = 4;

    if (verbsForFeedback.length > numVerbFeedbackDisplayed) {
        shiftValue = Math.floor(Math.random() * (verbsForFeedback.length - numVerbFeedbackDisplayed));
    }

    for (let i = 0; i < numVerbFeedbackDisplayed; i++) {
        document.getElementsByClassName("verb-feedback")[i].innerHTML = ""; // remove the verbs that could have been previouslly added in case of a previous uncorrect answer
    } 

    if(verbsForFeedback.length > numVerbFeedbackDisplayed) {
        for (let i = 0; i < numVerbFeedbackDisplayed ; i++) {
            document.getElementsByClassName("verb-feedback")[i].innerHTML = verbsWithPrepositions[verbsForFeedback[i + shiftValue]].verb; // adding "shiftValue" permits to not have always the same verbs displayed.
            };
    }; 
    if(verbsForFeedback.length <= numVerbFeedbackDisplayed) { // when there are not 4 verbs for feedback, only the available verbs will be used
        for (let i = 0; i < verbsForFeedback.length ; i++) {
        document.getElementsByClassName("verb-feedback")[i].innerHTML = verbsWithPrepositions[verbsForFeedback[i]].verb;  // no schift value here because the available verbs are not long enough to be shifted
        }; 
    } ; 

    document.getElementById("next-question").addEventListener("click", nextQuestion);
}

function nextQuestion() {

    incrementQuestionCounter();
    if (questionCounter == (numQuestions + 1)) { //stop the game when 8 verbs/questions has been answered
        document.getElementById("end-game").style.visibility = "visible";
        document.getElementById("final-score").innerHTML = score;
    }

    document.getElementById("wrong").style.visibility = "hidden"; // if it was wrong answer, this will hide the feedback
    for (let i = 0; i < numChoices; i++) { // to remove the colors added if correct or uncorrect
        document.getElementsByClassName("choice")[i].classList.remove("color-correct");
        document.getElementsByClassName("choice")[i].classList.remove("color-uncorrect");
    }

    // get a new verb, prepositions ... and display for the next question 
    getVerbIndex();
    displayVerb();
    makeArrayPrepositions();
    getPrepositions();
    displayPrepositions();
    randomCardPositionChoices();

    letChoose(); // re allow the player to choose (it was blocked after the previous choice)
}

// + 1 in score function. it displays the score in HTML
function incrementScore() {
    score += 1;
    document.getElementById('score').innerText = score;
}

// + 1 in question counter. it displays the question counter in HTML
function incrementQuestionCounter() {
    questionCounter += 1;
    document.getElementById('question-number').innerText = questionCounter;
}