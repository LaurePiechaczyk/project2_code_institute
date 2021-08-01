// ########## PART1 choose prepositions and verbs from a list and displaying it in the HTML ###########

// List of verb with the proposition in an object
let verbsWithPrepositions = [
    {
        verb: "achten",
        preposition: "auf",
    },
    {
        verb: "warten",
        preposition: "auf",
    },
    {
        verb: "sich erinnern",
        preposition: "an",
    },
    {
        verb: "träumen",
        preposition: "von",
    },
    {
        verb: "beginnen",
        preposition: "mit",
    },
    {
        verb: "danken",
        preposition: "für",
    },
    {
        verb: "denken",
        preposition: "an",
    },
    {
        verb: "sich interessieren",
        preposition: "für",
    },
    {
        verb: "sich konzentrieren",
        preposition: "auf",
    },
    {
        verb: "lachen",
        preposition: "über",
    },
    {
        verb: "sich vorbereiten",
        preposition: "auf",
    },
    {
        verb: "aufpassen",
        preposition: "auf",
    },
    {
        verb: "erzählen ",
        preposition: "von",
    },
    {
        verb: "sich treffen",
        preposition: "mit",
    },
    {
        verb: "teilnehmen",
        preposition: "an",
    },
    {
        verb: "sich schämen",
        preposition: "für",
    },
    {
        verb: "aufpassen",
        preposition: "auf",
    },
    {
        verb: "reden",
        preposition: "über",
    },
];

// variables
let arrayPrepositions = []; // array should look like something like ["auf", "auf", "an", "von", "mit", ....] it has the length of verbsWithPrepositions
let prepositionsListUnique = []; // array should look like something like ["auf", "an", "von", "mit", "für", "über"] each preposition appears only once
let prepositionsListUniqueIndex = []; // array should look like something like [5, 3, 4]; The number are the index of the preposition from the array prepositionsListUnique
let gamePrepositions = [];  // array should look like something like [5, 3, 4]; ["für", "mit", "von"]. The game will use this prepositions (they are choosen randomly) so each new game will be new prepositions/oreder
let indexPrepositionGame =  [ [] , [] , [] ] ; // arrays should look like something like [Array(5), Array(4), Array(6)]; The first array (i.e Array(5)) contains the index of verb with the first gamePreposition (the index refers to verbsWithPrepositions)
let indexPrepositionInPairGame =  [] ; // arrays should look like something like  [11, 8, 4, 13, 2, 6]. Here 11 and 8 refers to Position in verbsWithPrepositions where verbs have the same preposition. 4 and 13 to two other verbs with same preposition and 2 and 6  to two other verbs with same preposition

let verbToFill = document.getElementsByClassName("front");
let prepositionToFill = document.getElementsByClassName("back");


//make and array with all the prepositions.
function  makeArrayPrepositions() {
    for (let i = 0; i < verbsWithPrepositions.length ; i++) { 
   arrayPrepositions.push(verbsWithPrepositions[i].preposition)
        };
};
makeArrayPrepositions(); 

//make a list of the prepositions (each preposition will be only once in this array)
function makeListUniquePreposition() {
   prepositionsListUnique = Array.from(new Set(arrayPrepositions)); 
};
makeListUniquePreposition()


//randomly choose 3 different prepositions
function choosePrepositionListUnique() { 
    prepositionsListUniqueIndex[0] = Math.floor(Math.random() * prepositionsListUnique.length); //get first random preposition
    prepositionsListUniqueIndex[1] = Math.floor(Math.random() * prepositionsListUnique.length); 
    prepositionsListUniqueIndex[2] = Math.floor(Math.random() * prepositionsListUnique.length);
    while(prepositionsListUniqueIndex[0] == prepositionsListUniqueIndex[1]) {   
        prepositionsListUniqueIndex[1] = Math.floor(Math.random() * prepositionsListUnique.length);
        };//get different second preposition if is the same as the first
    while(prepositionsListUniqueIndex[2] == prepositionsListUniqueIndex[0] || prepositionsListUniqueIndex[2] == prepositionsListUniqueIndex[1]) {   //get different third preposition
        prepositionsListUniqueIndex[2] = Math.floor(Math.random() * prepositionsListUnique.length);
    };//get different third preposition if is the same as the first or second
}; //close function choosePreposition()
choosePrepositionListUnique();

// get the prepositions
function gamePrepositionsArray() {
gamePrepositions[0]= prepositionsListUnique[prepositionsListUniqueIndex[0]];
gamePrepositions[1]= prepositionsListUnique[prepositionsListUniqueIndex[1]];
gamePrepositions[2]= prepositionsListUnique[prepositionsListUniqueIndex[2]];
};
gamePrepositionsArray();

// get index preositions. it arrives in an arrays nested in array (indexPrepositionGame)
// but if more than 2 verbs with the same preposition the array will be longer than 2 
// for the game we need only pairs. Pairs will be done in a following array (indexPrepositionInPairGame)
function getIndexPreposition() {
    for (let i = 0; i < verbsWithPrepositions.length ; i++) {
            if (verbsWithPrepositions[i].preposition == gamePrepositions[0]) {
                indexPrepositionGame[0].push(i);
            };
            if (verbsWithPrepositions[i].preposition == gamePrepositions[1]) {
                indexPrepositionGame[1].push(i);
            };
            if (verbsWithPrepositions[i].preposition == gamePrepositions[2]) {
                indexPrepositionGame[2].push(i);
            };
    }; //end for loop
 }; //end function
getIndexPreposition();

// Now we need only pairs. 
function chooseTwoPrepositions(){
    for (let i = 0 ; i < 3 ; i++ ) {
            let firstPrepposition = Math.floor(Math.random() * indexPrepositionGame[i].length); 
            let secondPrepposition = Math.floor(Math.random() * indexPrepositionGame[i].length); 
            while(firstPrepposition == secondPrepposition){   //get different second preposition
                secondPrepposition = Math.floor(Math.random() * indexPrepositionGame[i].length);
            }; 
            indexPrepositionInPairGame.push(indexPrepositionGame[i][firstPrepposition]);
            indexPrepositionInPairGame.push(indexPrepositionGame[i][secondPrepposition]);
    }; //close for loop
}; // close function
chooseTwoPrepositions();

// displaying verbs and preopsitions in the HTML. Note: random position using grid property changing order ramdomly.
function displayVerbsAndPrepositions() {
    for (let i = 0 ; i < 6 ; i++ ) {
    verbToFill[i].innerHTML = verbsWithPrepositions[indexPrepositionInPairGame[i]].verb ;
    prepositionToFill[i].innerHTML = verbsWithPrepositions[indexPrepositionInPairGame[i]].preposition ;
    };
};
displayVerbsAndPrepositions();

// ########## PART2  Make the game working ###########
let cards = document.querySelectorAll('.card');
let cardIsReturned = false;
let firstCard, secondCard;
let locked = false;

cards.forEach(card => {
    card.addEventListener('click', returnCard)
    } );

function returnCard() { 
        if(locked) return;   // cards cannot be return/clicked at some times of the game

        this.childNodes[1].classList.toggle('active'); // it turns the card when the card is clicked clicked

        if(!cardIsReturned){ // it is like saying cardIsReturned == false. It means that no card has been turned. When one card has already been turned it would be cardIsReturned == True
            cardIsReturned = true;
            firstCard = this;
            return; // if it is the first card which is returned, the function is stopped here to let the player returning another card.
        }
    
        secondCard = this; // at this point of the function, we have 2 cards that have been returned. We can then check if they are correct pairs

        pair(); //function to take actions if the pair is correct or not
        
        cardIsReturned = false; // It is to let the player choose other pairs.
};

function pair(){

    if(firstCard === secondCard) {
       return
    } ; // it is if the person clicks twice on the same card, the player can choose othercards

    if(firstCard.getAttribute('data-attr') === secondCard.getAttribute('data-attr')) {
        firstCard.removeEventListener('click', returnCard);
        secondCard.removeEventListener('click', returnCard); // When pair is correct, the player cannot click anymore to return them
    }  
    else {
        locked = true; // there is a Timeout and during this time, the player cannot click on any card
        setTimeout(() => {
            firstCard.childNodes[1].classList.remove('active');
            secondCard.childNodes[1].classList.remove('active'); //To return the card so the player can continue to play with this card (because the pair is not correct)
            locked = false; // we remove the locked so the player can continue to play
        }, 1000);
    };
};

//random position because of grid property
function randomCardPosition(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 6);
        card.style.order = randomPos;
        console.log(randomPos)
    });
};
randomCardPosition();