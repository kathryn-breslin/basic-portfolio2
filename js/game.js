// Word Guess Game

//Theme : Phases of the Moon

//Define variables
var wins;
var losses;
var userInput;
var userGuesses = [];
var filteredUserGuesses = [];
var blanksForRandomWord = [];
var randomMoon = [];
var guessesRemaining;
var moonPhases = ["new moon", "waxing crescent", "first quarter", "waxing gibbous", "full moon", "waning gibbous", "third quarter", "waxing crescent"];

//Get keypress from user

// userGuesses = document.onkeyup = function(event) {
//     // console.log(event.key);
// }

//start the game by getting a random word from the array
function startGame() {
    wins = 0;
    losses = 0;
    guessesRemaining = 10;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesRemaining").textContent = guessesRemaining;

    randomMoon = moonPhases[Math.floor(Math.random() * moonPhases.length)];
    console.log(randomMoon);
    createUnderscores();
}

function createUnderscores() {
    for (var i = 0; i < randomMoon.length; i++) {
        // console.log(randomMoon.charAt(i));
        blanksForRandomWord.push(" __ ");
    }
    document.getElementById("moonUnderscores").innerHTML = blanksForRandomWord.join(" ");
    checkUserInput();
}

function checkUserInput() {
    document.onkeyup = function (event) {
        userInput = event.key.toLowerCase();
        // userGuesses.push(userInput);
        // screenDuplicates();
        // console.log(userGuesses)
        //if statement to replace underscore with user guess, if correct
        compareFilteredToRandomWord();
        if (randomMoon.indexOf(userInput) > -1) {
            for (var j = 0; j < randomMoon.length; j++) {
                if (userInput === randomMoon[j]) {
                    blanksForRandomWord[j] = userInput;
                    document.getElementById("moonUnderscores").innerHTML = blanksForRandomWord.join(" ");
                }
            }
        }
    }
}

// function screenDuplicates() {
//     filteredUserGuesses = userGuesses.filter(function (item, position) {
//         return (userGuesses.indexOf(item) === position)
//     });
//     compareFilteredToRandomWord()
//     // document.getElementById("guessesSoFar").textContent = filteredUserGuesses;
// }

function compareFilteredToRandomWord () {
    if (userGuesses.includes(userInput) === false) {
        userGuesses.push(userInput);
        guessesRemaining--;
        document.getElementById("guessesSoFar").textContent = userGuesses.join(" ");

    }
    // var matches =[];
    // var incorrects = [];

    // for (var i = 0; i < filteredLetter.length; i++) {
    //     for (var w = 0; w < randomWordLetter.length; w++) {
    //         if (filteredLetter[i] === randomWordLetter[w]){
    //             matches.push(filteredLetter[i]);
    //             console.log("These are the matches to the letters in the random word: " + matches);
    //         }
    //         else {
    //             console.log("Not a match:" + filteredLetter[i]);
    //         }
    //     }
    // }
}

startGame();

//Letter should not be pushed into "Guesses so Far" array if it is found in the random word
//Guesses remaining decreases with each guess only if incorrect
//if "Guesses Remaining" runs out, "Losses" increases
//if word is guessed correctly, Wins increases
//Restart the game after the round is either won or lost
