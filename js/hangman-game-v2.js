var gameState = {
    secretWord = '',
    secretLetters: [],
    guessedState: [],
    wrongGuesses:[],
    triesLeft: 6,
    newWord: function ( word ) {
        for ( var i; i < word.length; i++) {
            this.secretLetters[i] = word.slice( i, i + 1 );
            this.guessedState[i] = ['_'];
        }
        this.wrongGuesses = [];
        this.triesLeft = 6;
    },
    letterCorrect: function ( c ) {
        var letterFound = false;
        for (var i; i < this.secretLetters.length; i++) {
            if ( c === secretLetters[i] ) {
                guessedState[i] = secretLetters[i];
                letterFound = true;
            }
        }
        return letterFound;
    },
    wordCorrect: function ( w ) {
        var wordFound = false;
        if ( w === secretWord ) {
            guessedState = secretLetters;
            wordFound = true;    
        }
        return wordFound;
    }
}

var guessForm = document.getElementById( 'guess-form' );

// Add form submission listener
guessForm.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    // Get the input
    var guessField = document.getElementById( 'guess-input' );

    // Extract the value
    var guessValue = guessField.value;
    guessValue = guessValue.toLowerCase();
} ) ;

