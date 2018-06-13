//list the options the computer has
var compOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
                    'y', 'z'];

// list the initial variables
var win = 0;
var lose = 0;
var guesses = 9;
var guessesLeft = 9;
//creates a placeholder array for the users choicess
var guessedLetters = [];
var letterToGuess = null;

//selects a random value from the array
var compGuess = compOptions[Math.floor(Math.random() * compOptions.length)];

//creates a function to show remaining guesses
var updateGuessesLeft = function() {
document.getElementById('guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};


var updateLetterToGuess = function() {
this.letterToGuess = this.compOptions[Math.floor(Math.random() * this.compOptions.length)];
};

var updateGuessDone = function() {
document.getElementById('progress').innerHTML = "You've guessed so far: " + guessedLetters.join(', ');
};

//creates a reset function when the game round has ended
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessDone();
  }
  
  updateLetterToGuess();
  updateGuessesLeft();

// waits for user input to start the game and provides alert to them and reset the round
document.onkeyup = function(event) {
      guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessDone();
  
          if (guessesLeft > 0){
              if (userGuess == letterToGuess){
                  win++;
                  document.getElementById('win').innerHTML = "Won: " + win;
                  alert("You got the right letter!");
                  reset();
              }
          }else if(guessesLeft == 0){
              lose++;
              document.getElementById('lose').innerHTML = "Lost: " + lose;
              alert("Nope that was't quite right");
              reset();
          }
  };
  