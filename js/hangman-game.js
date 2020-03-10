var wordToGuess = '';
var letters = [];
var guessed = [];
var guessesLeft = 0;
var output=''

function newWord( enteredWord ) {
    wordToGuess = enteredWord.toLowerCase();
    guessesLeft = 6;
    for ( var i = 0; i < wordToGuess.length ; i++) {
        letters[i] = wordToGuess.slice( i, i+1 );
        guessed[i] = '_'
        output = output + guessed[i] + ' ';
        // console.log(i + ": " + letters[i])
    }
    return output + ' ' + guessesLeft + ' guesses left'
}

function guess( uG ) {
    userGuess = uG.toLowerCase();
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
        output = '';
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

