// Word Guess Game

//Theme : Phases of the Moon

//Define variables
var wins;
var losses;
var userGuesses = [];
var filteredUserGuesses;
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
        var userInput = event.key.toLowerCase();
        userGuesses.push(userInput);
        screenDuplicates();
        // console.log(userGuesses)
        //if statement to replace underscore with user guess, if correct
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

function screenDuplicates() {
    filteredUserGuesses = userGuesses.filter(function (item, position) {
        return (userGuesses.indexOf(item) === position)
    });
    document.getElementById("guessesSoFar").textContent = filteredUserGuesses;
}

function compareFilteredToRandomWord (filtered, random) {
    var finalArray = [];

    for (var i = 0; i < filtered.length; i++) {
        if (random.indexOf(filtered[i]) > -1) {
            finalArray.push(filtered[i]);
        }
        return finalArray;
    }    // document.getElementById("guessesSoFar").textContent = filteredUserGuesses;
    console.log("This is the final array: " + finalArray)
}

startGame();

//Letter should not be pushed into "Guesses so Far" array if it is found in the random word
//Guesses remaining decreases with each guess only if incorrect
//if "Guesses Remaining" runs out, "Losses" increases
//if word is guessed correctly, Wins increases
//Restart the game after the round is either won or lost
