// List of verb with the proposition in an object. Same list as for memo game
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
let VerbIndex ; // It is just a number. It is the index of the verb that will be used for the quizz as question
let arrayPrepositions ; // array should look like something like ["auf", "auf", "an", "von", "mit", ....] it has the length of verbsWithPrepositions
let prepositionsListUnique ; // array should look like something like ["auf", "an", "von", "mit", "für", "über"] each preposition appears only once
let preposition1 ; // should look like "auf". This preposition is the correct one
let preposition2 ; // a preposition randomly chosen which is different from the preposition1
let preposition3 ; // a preposition randomly chosen which is different from the preposition1 and the preposition2

let choices = document.querySelectorAll('.choice');

//get a question randomly (get the indexposition in verbsWithPrepositions)
function getVerbIndex() {
    VerbIndex = Math.floor(Math.random() * verbsWithPrepositions.length);
}
getVerbIndex()

// Display the verb
function displayVerb() {
    document.getElementById("question").innerHTML = verbsWithPrepositions[VerbIndex].verb;
} ;
displayVerb()

//#######  Get the good preposition + two other prepositions #######
//make and array with all the prepositions. 
function  makeArrayPrepositions() {
    arrayPrepositions = [];
    for (let i = 0; i < verbsWithPrepositions.length ; i++) { 
   arrayPrepositions.push(verbsWithPrepositions[i].preposition)
        };
};
makeArrayPrepositions();

// get the preoposition that will be displayed in the quizz. The first is the good one. The 2 others are randomly chosen.
function getPrepositions() {
    //make a list of the prepositions (each preposition will be only once in this array)
    prepositionsListUnique = Array.from(new Set(arrayPrepositions));

    // Get the good preposition + two other prepositions
    preposition1 = verbsWithPrepositions[VerbIndex].preposition;

    preposition2 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)] ;  
    while(preposition1 == preposition2) {   
        preposition2 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)] ;
    };

    preposition3 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)] ;  
    while(preposition3 == preposition1 || preposition3 == preposition2) {   
        preposition3 = prepositionsListUnique[Math.floor(Math.random() * prepositionsListUnique.length)] ;
    };
};
getPrepositions();

// Display prepositions in the quizz
function displayPrepositions() {
    document.getElementsByClassName("choice-text")[0].innerHTML = preposition1 ;
    document.getElementsByClassName("choice-text")[1].innerHTML = preposition2 ;
    document.getElementsByClassName("choice-text")[2].innerHTML = preposition3 ;
} ;
displayPrepositions();

// display randomly the answers by using the grid as done in the memo game
function randomCardPositionChoices(){
    choices.forEach(choice => {
        let randomPos = Math.floor(Math.random() * 3);
        choice.style.order = randomPos;
    })
};
randomCardPositionChoices();

//let the player choose a choice
function letChoose() {
    choices.forEach(choice => {
        choice.addEventListener('click', responseToTheChoice)
        } );
};
letChoose()

function responseToTheChoice(){
    if(this.getAttribute('data-attr') == "correct"){
        this.classList.add("color-correct");
        setTimeout(nextQuestion, 2000); // go to the next question
    }
    else {
        this.classList.add("color-uncorrect"); 
        setTimeout(feedback, 1000); // feedback will be displayed
    };
};

//feedback when wrong answer
function feedback() {
    document.getElementById("wrong").style.visibility = "visible";
    document.getElementById("preposition-feedback").innerHTML = preposition1 ;
    document.getElementsByClassName("verb-feedback")[0].innerHTML = "verb1" ;
    document.getElementsByClassName("verb-feedback")[1].innerHTML = "verb1" ;
    document.getElementsByClassName("verb-feedback")[2].innerHTML = "verb1" ;
    document.getElementsByClassName("verb-feedback")[3].innerHTML = "verb1" ;

    document.getElementById("next-question").addEventListener("click", nextQuestion);
};

function nextQuestion() {
    document.getElementById("wrong").style.visibility = "hidden"; // if it was wrong answer, this will hide the feedback
    for (let i = 0 ; i < 3 ; i++ ) { // to remove the colors added if correct or uncorrect
        document.getElementsByClassName("choice")[i].classList.remove("color-correct");
        document.getElementsByClassName("choice")[i].classList.remove("color-uncorrect");
        }; 

    // get a new verb, prepositions ... and display for the next question 
    getVerbIndex();
    displayVerb();
    makeArrayPrepositions(); 
    getPrepositions();
    displayPrepositions();
    randomCardPositionChoices(); 
}









