var wordToGuess = 'developer';
var guessesLeft = 6;
var letters = [];
var guessed = [];

for ( var i = 0; i < wordToGuess.length ; i++) {
    letters[i] = wordToGuess.slice( i, i+1 );
    guessed[i] = '_'
    console.log(i + ": " + letters[i])
}


function guess( userGuess ) {
    if (userGuess.length > 1){
        if ( userGuess === wordToGuess ) {
            return 'Correct! You win!';
        } else {
            guessesLeft = guessesLeft - 1;
            if ( guessesLeft > 0 ) {
                return 'Nope! ' + guessesLeft + ' guesses left';
            } else {
                return 'Nope! No more guesses left. You Lose!'
            }
        }
    } else {
        var output = '';
        for (var i = 0; i < letters.length; i++) {
            if ( userGuess === letters[i] ) {
                guessed[i] = letters[i];
            }
            output = output + guessed[i] + ' ';
        }
        guessesLeft = guessesLeft - 1;
        if (guessesLeft > 0) {
            output = output + ' ' + guessesLeft + ' guesses left';
            return output;
        } else {
            return 'Nope! No more guesses left. You Lose!'
        }
    }
}

