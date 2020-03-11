var gameState = {
    secretWord: '',
    secretLetters: [],
    guessedState: [],
    guessedWord: '',
    wrongGuesses: '',
    leftToGuess: 0,
    triesLeft: 6,
    newWord: function ( word ) {
        this.secretWord = word;
        this.guessedWord = '';
        for ( var i = 0; i < word.length; i++) {
            this.secretLetters[i] = word.slice( i, i + 1 );
            this.guessedState[i] = ['_'];
            this.guessedWord = this.guessedWord + '_';
        }
        this.wrongGuesses = '';
        this.leftToGuess = word.length;
        this.triesLeft = 6;
    },
    letterCorrect: function ( testChar ) {
        var letterFound = false;
        this.guessedWord = '';
        for (var i = 0; i < this.secretLetters.length; i++) {
            if ( testChar === this.secretLetters[i] ) {
                this.guessedState[i] = this.secretLetters[i];
                this.leftToGuess--;
                letterFound = true;
            }
            this.guessedWord = this.guessedWord + this.guessedState[i]
        }
        if ( !letterFound ) {
            this.triesLeft--;
            this.wrongGuesses = this.wrongGuesses + testChar;
        }
        return letterFound;
    },
    wordCorrect: function ( testWord ) {
        var wordFound = false;
        if ( testWord === this.secretWord ) {
            this.guessedState = this.secretLetters;
            this.guessedWord = this.secretWord;
            this.leftToGuess = 0;
            wordFound = true;    
        } else {
            this.triesLeft--;
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
    var guessValue = guessField.value;
    guessValue = guessValue.toLowerCase();
    document.getElementById( 'guess-input' ).value = '';

    var result = false;

    if ( guessValue.length > 1 ) {
        result = gameState.wordCorrect( guessValue );
    } else {
        result = gameState.letterCorrect( guessValue );
    }
    outputState();
    var communicationPara = document.getElementById( 'communication');
    if ( gameState.leftToGuess === 0 ) {
        communicationPara.textContent = "Congratulations! You win!";
    } else if ( gameState.triesLeft === 0 ) {
        communicationPara.textContent = "Bad luck. Out of tries. You lose!";
    } else if ( result ) {
        communicationPara.textContent = "Good guess!";
    } else {
        communicationPara.textContent = "Nope! hard luck.";
    }
} ) ;

function ClearCommunication() {
    var communicationPara = document.getElementById( 'communication');
    communicationPara.textContent = "";
}

function startNewGame() {
    var randomIndex = Math.floor(Math.random() * 5);
    gameState.newWord( wordsList[ randomIndex ] );
    outputState();
    var communicationPara = document.getElementById( 'communication');
    communicationPara.textContent = "";
}

function outputState() {
    var GuessPara = document.getElementById( 'guess-state' );
    GuessPara.textContent = gameState.guessedWord;
    var uncontainedSpan = document.getElementById( 'uncontained-letters' );
    uncontainedSpan.textContent = gameState.wrongGuesses;
    var triesLeftSpan = document.getElementById( 'tries-left' );
    triesLeftSpan.textContent = gameState.triesLeft;
}

const wordsList = ["shopping", "programmer", "balloon", "juggernaut", "xylophone"]
