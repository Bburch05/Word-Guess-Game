var hangman = {
    wins : 0,
    losses : 0,
    guesses : 5,
    guessLeft : 5,
    guessList: ["Dark Souls", "Front Mission", "Super Mario Bros", "Final Fantasy", "Mario"],
    //The Computer Chooses a Random word from the List
    playCorrectGuesses : [],
    //store Wrong Guesses
    playWrongGuesses : []
};

var DarkSouls = {
    title: "Dark Souls",
    img: ""
};

function initialize() {
    hangman.playCorrectGuesses = [];
    var comGuess = hangman.guessList[Math.floor(Math.random()*hangman.guessList.length)];
    console.log(comGuess);

    for (var i = 0; i < comGuess.length; i++) {
        hangman.playCorrectGuesses.push('_');
      }
    console.log(hangman.playCorrectGuesses);
    hangman.guessLeft = 5;
    hangman.playWrongGuesses = [];
};

    initialize();
  
document.onkeyup = function(event) {
    $("#winCount").text(hangman.wins);
    $("#lossCount").text(hangman.losses);
    $("#guessLeft").text(hangman.guessLeft);
    $("#lettersRight").text(hangman.playCorrectGuesses);
    $("#lettersWrong").text(hangman.playWrongGuesses);
    

    initialize();

    //The Computer hides it's guess
    if (hangman.comGuess.indexOf(event.key) === -1 )
        hangman.playWrongGuesses = push(event.key)
    else 
        hangman.playCorrectGuesses.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });

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

