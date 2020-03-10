var gameState = {
    secretWord: [],
    guessedState: [],
    wrongGuesses:[],
    triesLeft: 6,
    newWord: function ( word ) {
        for ( var i; i < word.length; i++) {
            this.secretWord[i] = word.slice( i, i + 1 );
            this.guessedState[i] = ['_'];
        }
        this.wrongGuesses = [];
        this.triesLeft = 6;
    },
    letterCorrect: function ( c ) {
        var letterFound = false;
        for (var i; i < this.secretWord.length; i++) {
            if ( c === secretWord[i] ) {
                guessedState[i] = secretWord[i];
                letterFound = true;
            }
        }
        return letterFound;
    },
    wordCorrect: function ( w ) {
        if ( w === secretWord )
    }
}