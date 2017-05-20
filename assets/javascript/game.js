//Starting variables
//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables set to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];

//Computer selects letter
var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
/* for initial test document.getElementById('computer').innerHTML = "Computer Choice: " + letterToGuess;*/

//Reset varibles
//Grabbing the HTML element and setting it equal to the guessesLeft
var updateGuessesLeft = function() {
    document.getElementById('guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

//Grabbing the HTML element and setting it equal to the guessesLeft
var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

// Display it as letters separated by commas, still not sure why join works and + doesn't
var updateGuessesSoFar = function() {
    document.getElementById('letter').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

 // Function will be called when we reset everything
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

//Basic game funciton
//Key is press, the users guess -- need lowercase as computer doesn't pick Caps-- ask why
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();;

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

      if (guessesLeft > 0){
          // Update the html to display win
      if (userGuess == letterToGuess){
          wins++;
          document.querySelector('#wins').innerHTML = "Wins: " + wins;
          // Call the reset. 
          reset();
      }
      }
      else if(guessesLeft == 0){
            // Update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            // Call the reset. 
            reset();
      }
      };





