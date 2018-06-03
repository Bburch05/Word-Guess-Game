function initialize() {
    hangman.playCorrectGuesses = [];
    for (var i = 0; i < comGuess.length; i++) {
        hangman.playCorrectGuesses.push('_');
      }
    console.log(hangman.playCorrectGuesses);
    hangman.guessLeft = hangman.guesses;
    hangman.playWrongGuesses = [];
};

var hangman = {
    wins : 0,
    losses : 0,
    guesses : 5,
    guessLeft : 5,
    guessList: ["dark-souls", "front-mission", "super-mario-bros", "final-fantasy", "mario"],
    //The Computer Chooses a Random word from the List
    playCorrectGuesses : [],
    //store Wrong Guesses
    playWrongGuesses : [],
    checkWin: function (){
        if (hangman.playCorrectGuesses.indexOf("_") === -1)
            hangman.wins++
            
    
        if (hangman.guessLeft <= 0) {
            hangman.losses++
        }
    }
};

var DarkSouls = {
    title: "Dark Souls",
    img: ""
};

var comGuess = hangman.guessList[Math.floor(Math.random()*hangman.guessList.length)];
console.log(comGuess);



    initialize();
  
document.onkeydown = function(event) {
    $("#winCount").text(hangman.wins);
    $("#lossCount").text(hangman.losses);
    $("#guessLeft").text(hangman.guessLeft);
    console.log(comGuess);

    if (comGuess.indexOf(event.key) === -1 ) {
        hangman.playWrongGuesses.push(event.key);
        $("#lettersWrong").text(hangman.playWrongGuesses);
        hangman.guessLeft--
        hangman.checkWin();
    }
    else { 
        for (j = 0; j < comGuess.length ; j++){
            if (event.key === comGuess[j]){
                hangman.playCorrectGuesses[j] = comGuess[j];
                $("#lettersRight").text(hangman.playCorrectGuesses);
                hangman.checkWin();
            }
        }
    }


  
// if (hangman.playCorrectGuesses.indexOf('_') = -1){
//     hangman.wins++;
//     $(".winorlose").text("You Win!");
//     initialize();
// }

// else if (hangman.playWrongGuesses.length = hangman.guesses) {
//     hangman.losses++;
//     $(".winorlose").text("You Lose! The answer was " + comGuess + ".");
//     initialize();
// }


}
//The Player presses a key to guess

//if correct it reveals a letter

//if incorrect it takes away a guess

//when all letters are guessed the player wins



//when all guesses are gone the game is over and the computer resets it's guess

