// Word Guess Game

//Theme : Phases of the Moon

//Define variables
var wins = 0;
var losses = 0;
var userInput;
var userGuesses = [];
var filteredUserGuesses = [];
var blanksForRandomWord = [];
var randomMoon = [];
var guessesRemaining;
var moonPhases = ["new moon", "waxing crescent", "first quarter", "waxing gibbous", "full moon", "waning gibbous", "third quarter", "waxing crescent"];


function startGame() {
    guessesRemaining = 10;
    blanksForRandomWord = [];
    filteredUserGuesses = [];
    document.getElementById("moonImage").style.display = "none";
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

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

        if (randomMoon.indexOf(userInput) > -1) {
            for (var j = 0; j < randomMoon.length; j++) {
                if (userInput === randomMoon[j]) {
                    blanksForRandomWord[j] = userInput;
                    document.getElementById("moonUnderscores").innerHTML = blanksForRandomWord.join(" ");
                }
            }
            if (blanksForRandomWord.includes(" __ ") == false) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                console.log("You win!")
                //Add a notice to user
                startGame();
            }
        }
        else if (userInput !== randomMoon[j]) {
            userGuesses.push(userInput)
            guessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

            console.log("Remaining Guesses from checkUserInputFunction: " + guessesRemaining);
            // console.log("This is a wrong letter")
            console.log("User Guesses: " + userGuesses)
            screenDuplicates();

            if (guessesRemaining <= 0) {
                losses++;
                document.getElementById("losses").innerHTML = losses;
                console.log("You lose!")
                startGame();
            }
        }
    }
}

function screenDuplicates() {
    filteredUserGuesses = userGuesses.filter(function (item, position) {
        return (userGuesses.indexOf(item) === position)
    });
    // compareFilteredToRandomWord()
    document.getElementById("guessesSoFar").textContent = filteredUserGuesses;

}


startGame();

//Letter should not be pushed into "Guesses so Far" array if it is found in the random word
//Guesses remaining decreases with each guess only if incorrect
//if "Guesses Remaining" runs out, "Losses" increases
//if word is guessed correctly, Wins increases
//Restart the game after the round is either won or lost
