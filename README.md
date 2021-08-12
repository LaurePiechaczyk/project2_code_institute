<h1 align="center"> Project 2 for Code Institute formation | German verbs with Prepositions - HTML & CSS & js</h1>

[View the live project here.](https://laurepiechaczyk.github.io/project2_code_institute/)

German verbs with Prepositions is a website built as part of a project for the [code institute](https://codeinstitute.net/) (training to become a web developer) to develop and show my skills in javascript. 

To do this, I created a game to learn German verbs with prepositions.
<h3 align="center"><img src="assets/images/gif-show-website.gif"></h3>

# Table of content
<details>
<summary>Open the Table of Contents here</summary>
</details>


# About the project 
In order to practice, develop and demonstrate my HTML, CSS and particularly js skills, I created the responsive website German verbs with Prepositions. German verbs with Prepositions is a website with a game and a quiz to learn the German verbs with Prepositions.
I have chosen this topic because I am learning German myself.

## Background to understand the purpose of the game
As in English, some German verbs are followed by prepositions to give a certain meaning. These are called "verbs with prepositions". For example, "to wait for" would be "warten auf" in German.

It leads to the question: 
How can a person learning German learn which preposition goes with which verb?

## Idea behind the website to help learn German
To learn a language, repetition is the key and, in my opinion, boredom is the biggest obstacle.

It is thus important to find ways to avoid boredom and games can be very useful.


Another idea to develop this website is to learn by matching verbs using the same preposition.

That's what this site is all about: Fun + matching verbs with same preposition

# Target audience
Learners of German, especially those who want to improve their knowledge of German verbs with prepositions. 

# User Experience
- ### Visitor Goals
  - As a Visitor, I want to easily understand the main purpose of the site.
  - As a Visitor, I want to start playing directly.
  - As a Visitor, I want to learn and get motivation.
  - As a Visitor, I want to be able to easily navigate throughout the site.
  - As a Visitor, I want to access the site across a range of devices.

## Wireframes
<details>
<summary>Memo game for computer</summary>
<h3 align="center"><img src="assets/images/wireframe-memo-bigscreen.png"></h3>
</details>
<details>
<summary>Memo game for phone</summary>
<h3 align="center"><img src="assets/images/wireframe-memo-phone.png"></h3>
</details>
<details>
<summary>Quiz</summary>
<h3 align="center"><img src="assets/images/wireframe-quiz.png"></h3>
</details>
<details>
<summary>Quiz feedback</summary>
<h3 align="center"><img src="assets/images/wireframe-quiz-feedback.png"></h3>
</details>
<details>
<summary>Rules</summary>
<h3 align="center"><img src="assets/images/wireframe-rules.png"></h3>
</details>


# Features 
## Composition of the website
The site is composed of 3 pages. The home page is a game called Memo game which contains links to another page which is a quiz and a last page which contains the rules and explanations about the site.

## Memo Game
The German Verbs with Prepositions Memo Game is inspired by memory card games where the player must turn over cards to find pairs of identical pictures. Instead of finding pairs of pictures, the player of the German memo game must find pairs of verbs with the same preposition.

<details>
<summary>Picture of the Memo Game here</summary>
<h3 align="center"><img src="assets/images/memo-game.png"></h3>
</details>

### Main logical steps to build the Memo Game
- Part 1: Main steps to get pairs of verbs with preposition:
  - Get an array with all the preposition (“arrayPrepositions”)
  - Get a list of prepositions without duplicate in an array (“prepositionsListUnique”)
  - Get randomly 3 prepositions in an array because there are 3 pairs of cards (“gamePrepositions”).
  - For each game preposition, get 2 verbs with the preposition (“IndexPrepositionInPairGame”). The output is an array with 6 numbers. The 2 firsts numbers are numbers to retrieve the verbs with the first preposition, the next 2 numbers for the second preposition and the last 2 numbers for the third preposition: [index_for_verb1_prep1, index_for_verb2_prep1, index_for_verb1_prep2, index_for_verb2_prep2, index_for_verb1_prep3, index_for_verb2_prep3] 

- Part2:  Make the game working
  This part was adapted from [20-projets-en-javascript by Enzo Ustariz](https://www.udemy.com/course/20-projets-en-javascript)
  - To return the card, rotations of 180° was used. 
  - When the pair matches, the event listener is removed from the matched cards. When the pair does not match the cards are turned back to allow to select a new pair.
  - Cards are randomly distributed by giving a random number to order each card. Giving random number between 1 and 6 would tend to place the pairs close to each other. For example, if all the cards received the number 2 randomly, the default position would be kept.  The numbers assigned to each card randomly is over 6 (by multiplying the number of cards by the number “limitBiais”). The aim it to limit that Bias.


## Quiz
The quiz asks to find the right preposition associated with the verb. It has the particularity that in case of wrong answer, the player will receive a feedback with the right answer (the right preposition) and also a list of verbs that have the same preposition. It contains 8 questions and the number of correct answers is indicated in the upper right corner. At the end of the quiz, the player receives feedback on the number of correct answers.

<details>
<summary>Picture of the Quiz here</summary>
<h3 align="center"><img src="assets/images/quiz.png"></h3>
</details>

### Main logical steps to build the Quiz
- A verb is chosen randomly and can be chosen only once during the game. 
- The verb is then displayed as question and the correct preposition as first choice.
- 2 different prepositions are randomly selected and displayed as second and third choices. 
- The choices are then displayed randomly using the same system as the cards in the memo game. As in the memo game, the “limitBiais” number is used to limit bias that the correct answer would tend to be placed less often in the last positions of choices. For example, if the order number is chosen randomly between 1 and 3 for each choice, it is possible that all choices get the number 3 and the choices would be displayed as the default (i.e. the correct answer first). 
- When a correct answer is chosen, the quiz continues and display a new question while increasing the score.
- When a wrong answer is given, a feedback with the correct answer is displayed. Verbs using the same preposition are also displayed. If the list of available verbs is 4 or under, all the verbs are displayed. If the list of verbs is over 4, a shift number (“shiftValue”) randomly gotten is used to not always show the same first 4 verbs.  
- At the end of the quiz, a feedback with the number of correct answers is given.


- ### Background and rules
This page explains the purpose of the games and the rules.
<details>
<summary>Picture of the Background and rules here</summary>
<h3 align="center"><img src="assets/images/rules.png"></h3>
</details>

# Technologies used
## Languages used
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)  
-   [js](https://en.wikipedia.org/wiki/JavaScript)  

## Frameworks and Programs used
- [Git](https://git-scm.com/) | used as version control system

- [Gitpod](https://gitpod.io/workspaces) | used to code, commit to git and push the codes to github

- [GitHub](https://github.com/) | used to store the project code, show it and deploy the website

- [Balsamiq](https://balsamiq.com/) |  used to create the wireframe

- [Powerpoint](https://simple.wikipedia.org/wiki/Microsoft_PowerPoint) | used to create images from screenshots

- [Word](https://en.wikipedia.org/wiki/Microsoft_Word) | used to correct the grammar

- [am I responsive?](http://ami.responsivedesign.is/) | used to look at the responsiveness of the website 

- [W3C Markup Validation Service](https://validator.w3.org/) | used to check the validity of the HTML code

- [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/) | used to check the validity of the CSS code

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) | used to inspect the elements, codes and to see the how the site look like on various phones and tablets

- [DeepL](https://www.deepl.com/) | used to translate words from French to English and to write the content of the website and the 'Read me' file

-  [Xbox Game Bar](https://www.microsoft.com/en-us/p/xbox-game-bar/9nzkpstsnw4p?activetab=pivot:overviewtab) | used to make the video to present the website in the read me file

- [Crop-video](https://crop-video.com/) | used to crop the video to present the website in the read me file

- [Ezgif](https://ezgif.com/optimize/ezgif-2-af1b3b441270.gif) |  used to transform the video into gif to present the website in the read me file



# Tests
## Code validation and issues found
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
- [W3C Markup Validation Memo Game | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Flaurepiechaczyk.github.io%2Fproject2_code_institute%2Findex.html)

- [W3C Markup Validation Quiz | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Flaurepiechaczyk.github.io%2Fproject2_code_institute%2Fquizz.html)

- [W3C Markup Validation Quiz | Rules](https://validator.w3.org/nu/?doc=https%3A%2F%2Flaurepiechaczyk.github.io%2Fproject2_code_institute%2Frules.html)

- [W3C CSS Validator | Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flaurepiechaczyk.github.io%2Fproject2_code_institute%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Testing User Stories

## Test on browsers
The website was tested on computers using the browsers:
- [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome)
- [Firefox](https://en.wikipedia.org/wiki/Firefox) 
- [internet explorer](https://en.wikipedia.org/wiki/Internet_Explorer)
- [Microsoft edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
- [Safary](https://en.wikipedia.org/wiki/Safari_(software))

## Test on devices and Responsiveness
[Chrome DevTools](https://developer.chrome.com/docs/devtools/) was used to see how the site looks like on various phones and tablets. Additionally, after deployment the website was tested on various phones: iphone11, iphone10, Samsung Galaxy A3.

Responsiveness was tested with [am I responsive?](http://ami.responsivedesign.is/).
<details>
<summary>Am I responsive picture</summary>
<h3 align="center"><img src="assets/images/main-picture.png"></h3>
</details>

# Deployment
## GitHub Pages
The website has been deployed with GitHub. The project was stored in GitHub.
- In the GitHub repository:
    - Go to Settings
    - Then GitHub Pages
    - Select Branch main
    - Save
    - Visit the website by following the link

## Making a Local Clone
- Log in to GitHub and locate the GitHub Repository.
- Click the Code drop down menu.
- Either download the ZIP file, unpackage locally and open with IDE OR to clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
- Open Git Bash
- Change the current working directory to the location where you want the cloned directory to be made
- Type git clone, and then paste the URL you copied.
- Press Enter. Your local clone will be created.


# Credits
## Theme Colors
The colors of the theme were inspired by the palettes : [Color Palette Ideas from Horizon Sky Shore Image](https://icolorpalette.com/imagepalette/color-palette-ideas-from-horizon-sky-shore-image-2)

## Website content
German verbs with preposition were found in the following websites:

[Collins](https://grammar.collinsdictionary.com/german-easy-learning/verbs-followed-by-prepositions)

[ielanguage](https://ielanguages.com/german-verbs-prepositions.html)

[deutsch.ie](http://deutsch.ie/german-grammar/german-exercises/german-verbs/game-verbs-with-prepositions/)

## Code credits
- ### General
[code institute](https://codeinstitute.net/) - Parts of the code throughout the website have been adapted from the courses and the walkthrough project called Love Maths.

[w3schools](https://www.w3schools.com/) - Used throughout the project.

[stakocverflow](https://stakocverflow.com/) - Used throughout the project.

- ### Memo Game
The code from the Udemy course [20-projets-en-javascript by Enzo Ustariz](https://www.udemy.com/course/20-projets-en-javascript) has been adapted to meet the needs of the German website Verb with preposition. This code has been used mainly for the features of a basic memo game including flipping cards, matching pairs, using grids. The code has also been adapted for some of the Quiz features, including random ordering of choices and selecting answers leading to an action. The source code can be found here: [source code](https://github.com/Ziratsu/Code-source-projets-JS/tree/master/ProjetsTermin%C3%A9s/9.%20MemoryCard).

- ### Quiz
The steps for building the quiz were deeply inspired by the Udemy course [Build a Quiz App with HTML, CSS, and JavaScript by James Quick](https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/). Some of the code from this course has also been adapted to create the quiz. The source code can be found here: [source code](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript/tree/master/Quiz%20App%20Master).

- ### Read me file credits
The code was adapted from the readme file from my first project which was adapted from: 

[LogisticBravo](https://github.com/LogisticBravo/Milestone_Project-1-3DPrintQ) 

[Code Institute](https://github.com/Code-Institute-Solutions/readme-template)

[Code Institute](https://github.com/Code-Institute-Solutions/SampleREADME)


# Conclusion

# Acknowledgments


