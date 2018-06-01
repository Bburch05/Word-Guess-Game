var hangman = {
    wins = 0,
    losses = 0,
    guesses = 10,
    guessList: ["Dark Souls", "Front Mission", "Super Mario Bros", "Final Fantasy", "Assassin's Creed"],
    //The Computer Chooses a Random word from the List
    guess: this.GuessList[Math.floor(Math.random()*comGuessList.length)].toLowerCase(),
    playCorrectGuesses = [],
    //store Wrong Guesses
    playWrongGuesses = []
};

//The Computer hides it's guess
for (var i = 0; i < hangman.guess.length; i++) {
    playCorrectGuesses.push('_');
  }
document.onkeyup = function(event) {

    
//The Player presses a key to guess

//if correct it reveals a letter

//if incorrect it takes away a guess

//when all letters are guessed the player wins

//when all guesses are gone the game is over and the computer resets it's guess

}