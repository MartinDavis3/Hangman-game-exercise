// The gameState object holds the propeties for the current state of the game
// and the methods used for game play. It does not handle UI communication.
// Some properties (e.g. the word to be guessed) are held in differt forms which are kept synchronised,
// one for ease of comparison, the other for ease of output.
var gameState = {
    secretWord: '',
    secretLetters: [],
    guessedState: [],
    guessedWord: '',
    wrongGuesses: '',
    leftToGuess: 0,
    triesLeft: 0,
    newWord: function ( word ) {
        this.secretWord = word;
        this.guessedWord = '';
        this.secretLetters = [];
        this.guessedState = [];
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
var guessedList = [];

// Form submission listener
guessForm.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    // Get the input
    var guessField = document.getElementById( 'guess-input' );
    var guessValue = guessField.value;
    guessValue = guessValue.toLowerCase();
    document.getElementById( 'guess-input' ).value = '';

    // Set communication output element
    var communicationPara = document.getElementById( 'communication');

    // Check validity of the guess and communicate to user if necessary
    validTry = true;

    if ( gameState.triesLeft === 0 ) {
        validTry = false;
        communicationPara.textContent = "You have to start a new game.";
    }

    for (var i = 0; i < guessedList.length; i++) {
        if ( guessValue === guessedList[i] ) {
            communicationPara.textContent = "You already tried that!";
            validTry = false;
            break;
        }
    }
    guessedList.push( guessValue );

    // If this is a valid guess
    if ( validTry ) {
        var result = false;
        if ( guessValue.length > 1 ) {
            result = gameState.wordCorrect( guessValue );
        } else {
            result = gameState.letterCorrect( guessValue );
        }
        outputState();
        if ( gameState.leftToGuess === 0 ) {
            communicationPara.textContent = "Congratulations! You win!";
        } else if ( gameState.triesLeft === 0 ) {
            communicationPara.textContent = "Bad luck. Out of tries. You lose!";
            var GuessPara = document.getElementById( 'guess-state' );
            GuessPara.textContent = gameState.secretWord;
            } else if ( result ) {
            communicationPara.textContent = "Good guess!";
        } else {
            communicationPara.textContent = "Nope! hard luck.";
        }
    }

} ) ;

// Clears any previous communication (called when user starts to enter a new guess)
function ClearCommunication() {
    var communicationPara = document.getElementById( 'communication');
    communicationPara.textContent = "";
}

// Chooses a word at random from a list and sets the gameState for a new game
function startNewGame() {
    guessedList=[];
    var randomIndex = Math.floor(Math.random() * wordsList.length);
    gameState.newWord( wordsList[ randomIndex ] );
    outputState();
    var communicationPara = document.getElementById( 'communication');
    communicationPara.textContent = "";
}

// Send the current state of the game to the UI (HTML)
function outputState() {
    var GuessPara = document.getElementById( 'guess-state' );
    GuessPara.textContent = gameState.guessedWord;
    var uncontainedSpan = document.getElementById( 'uncontained-letters' );
    uncontainedSpan.textContent = gameState.wrongGuesses;
    var triesLeftSpan = document.getElementById( 'tries-left' );
    triesLeftSpan.textContent = gameState.triesLeft;
}

// List of words (between 6 and 12 letters) to choose from. (List is long, so at the end to keep it out of the way!)
const wordsList = ['ability', 'accept', 'according', 'account', 'across', 'action', 'activity', 'actually', 'address', 'affect', 'against', 'agency', 'agreement', 'almost', 'already', 'although', 'always', 'amount', 'analysis', 'animal', 'another', 'answer', 'anyone', 'anything', 'appear', 'approach', 'around', 'arrive', 'article', 'artist', 'assume', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'beautiful', 'because', 'become', 'before', 'behavior', 'behind', 'believe', 'benefit', 'better', 'between', 'beyond', 'billion', 'brother', 'budget', 'building', 'business', 'camera', 'campaign', 'cancer', 'candidate', 'capital', 'career', 'center', 'central', 'century', 'certain', 'certainly', 'challenge', 'chance', 'change', 'character', 'charge', 'choice', 'choose', 'church', 'citizen', 'clearly', 'collection', 'college', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'consider', 'consumer', 'contain', 'continue', 'control', 'country', 'couple', 'course', 'create', 'cultural', 'culture', 'current', 'customer', 'daughter', 'debate', 'decade', 'decide', 'decision', 'defense', 'degree', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'doctor', 'during', 'economic', 'economy', 'education', 'effect', 'effort', 'either', 'election', 'employee', 'energy', 'enough', 'entire', 'environment', 'especially', 'establish', 'evening', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'expect', 'experience', 'expert', 'explain', 'factor', 'family', 'father', 'federal', 'feeling', 'figure', 'finally', 'financial', 'finger', 'finish', 'follow', 'foreign', 'forget', 'former', 'forward', 'friend', 'future', 'garden', 'general', 'generation', 'government', 'ground', 'growth', 'happen', 'health', 'herself', 'himself', 'history', 'hospital', 'however', 'hundred', 'husband', 'identify', 'imagine', 'impact', 'important', 'improve', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'interview', 'investment', 'involve', 'itself', 'kitchen', 'knowledge', 'language', 'lawyer', 'leader', 'letter', 'likely', 'listen', 'little', 'machine', 'magazine', 'maintain', 'majority', 'manage', 'management', 'manager', 'market', 'marriage', 'material', 'matter', 'measure', 'medical', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'military', 'million', 'minute', 'mission', 'modern', 'moment', 'morning', 'mother', 'movement', 'myself', 'nation', 'national', 'natural', 'nature', 'nearly', 'necessary', 'network', 'newspaper', 'nothing', 'notice', 'number', 'office', 'officer', 'official', 'operation', 'opportunity', 'option', 'organization', 'others', 'outside', 'painting', 'parent', 'participant', 'particular', 'particularly', 'partner', 'patient', 'pattern', 'people', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'physical', 'picture', 'player', 'police', 'policy', 'political', 'politics', 'popular', 'population', 'position', 'positive', 'possible', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'provide', 'public', 'purpose', 'quality', 'question', 'quickly', 'rather', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'require', 'research', 'resource', 'respond', 'response', 'result', 'return', 'reveal', 'school', 'science', 'scientist', 'season', 'second', 'section', 'security', 'senior', 'series', 'serious', 'service', 'several', 'sexual', 'should', 'shoulder', 'significant', 'similar', 'simple', 'simply', 'single', 'sister', 'situation', 'social', 'society', 'soldier', 'somebody', 'someone', 'something', 'sometimes', 'source', 'southern', 'special', 'specific', 'speech', 'spring', 'standard', 'statement', 'station', 'strategy', 'street', 'strong', 'structure', 'student', 'subject', 'success', 'successful', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'surface', 'system', 'teacher', 'technology', 'television', 'themselves', 'theory', 'though', 'thought', 'thousand', 'threat', 'through', 'throughout', 'together', 'tonight', 'toward', 'traditional', 'training', 'travel', 'treatment', 'trouble', 'understand', 'usually', 'various', 'victim', 'violence', 'weapon', 'weight', 'western', 'whatever', 'whether', 'window', 'within', 'without', 'wonder', 'worker', 'writer', 'yourself']