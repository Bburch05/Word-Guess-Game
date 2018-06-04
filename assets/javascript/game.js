function initialize() {
    hangman.playCorrectGuesses = [];
    for (var i = 0; i < hangman.comGuess.length; i++) {
        if (hangman.comGuess.charAt[i] != "-"){
        hangman.playCorrectGuesses.push('_');
        }
    }
    hangman.guessLeft = hangman.guesses;
    hangman.playWrongGuesses = [];
    hangman.comGuess = hangman.guessList[Math.floor(Math.random()*hangman.guessList.length)];
};

var worddisplay = "";

var hangman = {
    wins : 0,
    losses : 0,
    guesses : 5,
    guessLeft : 5,
    guessList: ["Dark-Souls", "Front-Mission", "Super-Mario-Bros", "Final-Fantasy", "Mario"],
    //The Computer Chooses a Random word from the List
    playCorrectGuesses : [], 
    //store Wrong Guesses
    playWrongGuesses : [],
    comGuess : "" ,
    checkWin: function (){
        if (hangman.playCorrectGuesses.indexOf("_") === -1)
            hangman.wins++
            $(".winorlose").text("You Win!");
            
            
    
        if (hangman.guessLeft <= 0) {
            hangman.losses++
            $(".winorlose").text("You Lose! The answer was " + hangman.comGuess + ".");
        }
    }
};


console.log(hangman.comGuess);

//Guess ul

    initialize();
  
document.onkeydown = function(event) {
    $("#winCount").text(hangman.wins);
    $("#lossCount").text(hangman.losses);
    $("#guessLeft").text(hangman.guessLeft);
    console.log(hangman.comGuess);

    if (hangman.comGuess.indexOf(event.key) === -1 ) {
        hangman.playWrongGuesses.push(event.key);
        $("#lettersWrong").text(hangman.playWrongGuesses);
        hangman.guessLeft--
        hangman.checkWin();
    }
    else { 
        for (j = 0; j < hangman.comGuess.length ; j++){
            if (event.key == hangman.comGuess[j]){
                hangman.playCorrectGuesses[j] = hangman.comGuess[j];
                worddisplay.charAt = ""
                $("#lettersRight").text(hangman.playCorrectGuesses);
                hangman.checkWin();
            }
        }
    }


  
// if (hangman.playCorrectGuesses.indexOf('_') = -1){
//     hangman.wins++;
//     
//     initialize();
// }

// else if (hangman.playWrongGuesses.length = hangman.guesses) {
//     
//     
//     initialize();
// }


}
//The Player presses a key to guess

//if correct it reveals a letter

//if incorrect it takes away a guess

//when all letters are guessed the player wins



//when all guesses are gone the game is over and the computer resets it's guess

