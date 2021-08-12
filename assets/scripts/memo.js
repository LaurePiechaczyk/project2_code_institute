// ########## PART1 choose prepositions and verbs from a list and displaying it in the HTML ###########

// List of verb with the proposition in an object
import {
    verbsWithPrepositions
} from './list.js';

// variables
let arrayPrepositions = []; 
let prepositionsListUnique = []; 
let prepositionsListUniqueIndex = []; 
let gamePrepositions = []; 
let indexPrepositionGame = [ [],[],[] ]; 
let indexPrepositionInPairGame = []; 

const verbToFill = document.getElementsByClassName("front");
const prepositionToFill = document.getElementsByClassName("back");

let numCards = 6; 
let numPairs = numCards / 2;
let limitBiais = 10;

//make and array with all the prepositions.
function makeArrayPrepositions() {
    for (let i = 0; i < verbsWithPrepositions.length; i++) {
        arrayPrepositions.push(verbsWithPrepositions[i].preposition);
    }
}
makeArrayPrepositions();

//make a list of the prepositions (each preposition will be only once in this array)
function makeListUniquePreposition() {
    prepositionsListUnique = Array.from(new Set(arrayPrepositions)); //A Set is a collection of unique values https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
}
makeListUniquePreposition();

//randomly choose 3 different prepositions
function choosePrepositionListUnique() {
    prepositionsListUniqueIndex[0] = Math.floor(Math.random() * prepositionsListUnique.length); //get first random preposition
    prepositionsListUniqueIndex[1] = Math.floor(Math.random() * prepositionsListUnique.length);
    prepositionsListUniqueIndex[2] = Math.floor(Math.random() * prepositionsListUnique.length);
    while (prepositionsListUniqueIndex[0] == prepositionsListUniqueIndex[1]) {
        prepositionsListUniqueIndex[1] = Math.floor(Math.random() * prepositionsListUnique.length);
    } //get different second preposition if is the same as the first
    while (prepositionsListUniqueIndex[2] == prepositionsListUniqueIndex[0] || prepositionsListUniqueIndex[2] == prepositionsListUniqueIndex[1]) { //get different third preposition
        prepositionsListUniqueIndex[2] = Math.floor(Math.random() * prepositionsListUnique.length);
    } //get different third preposition if is the same as the first or second
} 
choosePrepositionListUnique();

// get the prepositions
function gamePrepositionsArray() {
    gamePrepositions[0] = prepositionsListUnique[prepositionsListUniqueIndex[0]];
    gamePrepositions[1] = prepositionsListUnique[prepositionsListUniqueIndex[1]];
    gamePrepositions[2] = prepositionsListUnique[prepositionsListUniqueIndex[2]];
}
gamePrepositionsArray();

/* 
get index preositions. it arrives in an arrays nested in array (indexPrepositionGame)
but if more than 2 verbs with the same preposition the array will be longer than 2 
for the game we need only pairs. Pairs will be done in a following array (indexPrepositionInPairGame)
*/
function getIndexPreposition() {
    for (let i = 0; i < verbsWithPrepositions.length; i++) {
        if (verbsWithPrepositions[i].preposition == gamePrepositions[0]) {
            indexPrepositionGame[0].push(i);
        }
        if (verbsWithPrepositions[i].preposition == gamePrepositions[1]) {
            indexPrepositionGame[1].push(i);
        }
        if (verbsWithPrepositions[i].preposition == gamePrepositions[2]) {
            indexPrepositionGame[2].push(i);
        }
    } 

    // in case there is no pair available in the list, a new game will start. It because otherwise page will look for the pair in a while loop and thus the page will not load.
    if (indexPrepositionGame[0].length == 1 || indexPrepositionGame[1].length == 1 || indexPrepositionGame[2].length == 1) {
        startNewMemo();
        return;
    }

    chooseTwoPrepositions();
} 
getIndexPreposition();

// Now we need only pairs. 
function chooseTwoPrepositions() {
    for (let i = 0; i < numPairs; i++) {
        let firstPrepposition = Math.floor(Math.random() * indexPrepositionGame[i].length);
        let secondPrepposition = Math.floor(Math.random() * indexPrepositionGame[i].length);
        while (firstPrepposition == secondPrepposition) { //get different second preposition
            secondPrepposition = Math.floor(Math.random() * indexPrepositionGame[i].length);
        }
        indexPrepositionInPairGame.push(indexPrepositionGame[i][firstPrepposition]);
        indexPrepositionInPairGame.push(indexPrepositionGame[i][secondPrepposition]);
    } 
} 

// displaying verbs and preopsitions in the HTML. Note: random position using grid property changing order ramdomly.
function displayVerbsAndPrepositions() {
    for (let i = 0; i < numCards; i++) {
        verbToFill[i].innerHTML = verbsWithPrepositions[indexPrepositionInPairGame[i]].verb;
        prepositionToFill[i].innerHTML = verbsWithPrepositions[indexPrepositionInPairGame[i]].preposition;
    }
}
displayVerbsAndPrepositions();

// ########## PART2  Make the game working ###########
const cards = document.querySelectorAll('.card');
let cardIsReturned = false;
let firstCard, secondCard;
let locked = false;

cards.forEach(card => {
    card.addEventListener('click', returnCard);
});

function returnCard() {
    if (locked) return; // cards cannot be return/clicked at some times of the game

    this.childNodes[1].classList.toggle('active'); // it turns the card when the card is clicked clicked

    if (!cardIsReturned) { // it is like saying cardIsReturned == false. It means that no card has been turned. When one card has already been turned it would be cardIsReturned == True
        cardIsReturned = true;
        firstCard = this;
        return; // if it is the first card which is returned, the function stopped here to let the player returning another card.
    }

    secondCard = this; // at this point of the function, we have 2 cards that have been returned. We can then check if they are correct pairs

    pair(); //function to take actions if the pair is correct or not

    cardIsReturned = false; // It is to let the player choose other pairs.
}

function pair() {

    if (firstCard === secondCard) {
        return;
    } // it is if the person clicks twice on the same card, the player can choose othercards

    if (firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')) {
        firstCard.removeEventListener('click', returnCard);
        secondCard.removeEventListener('click', returnCard); // When pair is correct, the player cannot click anymore to return them
    } else {
        locked = true; // there is a Timeout and during this time, the player cannot click on any card
        setTimeout(() => {
            firstCard.childNodes[1].classList.remove('active');
            secondCard.childNodes[1].classList.remove('active'); //To return the card so the player can continue to play with this card (because the pair is not correct)
            locked = false; // we remove the locked so the player can continue to play
        }, 1000);
    }
}

//random position because of grid property
function randomCardPosition() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * numCards * limitBiais ); //
        card.style.order = randomPos;
    });
}
randomCardPosition();

// restart the game
document.getElementById("start-new-memo").addEventListener('click', startNewMemo);

function startNewMemo() {
    window.location.reload();
}