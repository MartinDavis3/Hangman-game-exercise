
// The gameState object holds the properties for the current state of the game
// and the methods used for game play. It does not handle UI communication.
// Some properties (e.g. the word to be guessed) are held in differt forms which are kept synchronised,
// one for ease of comparison, the other for ease of output.

// Tried to put this class in a separate file with export and then use
// import to bring it in, but it would not work.
 class GameState {
    secretWord: string;
    secretLetters: string[];
    guessedState: string[];
    guessedWord: string;
    wrongGuesses: string;
    leftToGuess: number;
    triesLeft: number;
    public constructor( secretWord: string) {
        this.newWord(secretWord);
    }
    public newWord( word: string) {
        this.secretWord = word;
        this.guessedWord = '';
        this.secretLetters = [];
        this.guessedState = [];
        for ( let i = 0; i < word.length; i++) {
            this.secretLetters[i] = word.slice( i, i + 1 );
            this.guessedState[i] = '_';
            this.guessedWord = this.guessedWord + '_';
        }
        this.wrongGuesses = '';
        this.leftToGuess = word.length;
        this.triesLeft = 6;
    }
    public letterCorrect( testChar: string ) {
        var letterFound = false;
        this.guessedWord = '';
        for (let i = 0; i < this.secretLetters.length; i++) {
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
    }
    public wordCorrect ( testWord: string ) {
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
};

// Chooses a word at random from a list and sets the gameState for a new game
const startNewGame = ():void => {
    guessedList=[];
    var randomIndex = Math.floor(Math.random() * wordsList.length);
    myGameState.newWord( wordsList[ randomIndex ] );
    // myGameState.newWord(testWord);
    outputState();
    var communicationPara = document.getElementById( 'communication');
    communicationPara.textContent = "";
}

// Clears any previous communication (called when user starts to enter a new guess)
const ClearCommunication = ():void => {
    var communicationPara = document.getElementById( 'communication');
    communicationPara.textContent = "";
}

// Send the current state of the game to the UI (HTML)
const outputState = ():void => {
    var GuessPara = document.getElementById( 'guess-state' );
    GuessPara.textContent = myGameState.guessedWord;
    var uncontainedSpan = document.getElementById( 'uncontained-letters' );
    uncontainedSpan.textContent = myGameState.wrongGuesses;
    var triesLeftSpan = document.getElementById( 'tries-left' );
    triesLeftSpan.textContent = String(myGameState.triesLeft);
}

// List of words (between 6 and 12 letters) to choose from.
// This list is modified (length selection) from the list found at:
//https://www.ef.com/wwen/english-resources/english-vocabulary/top-1000-words/
const wordsList = ['ability', 'accept', 'according', 'account', 'across', 'action', 'activity', 'actually', 'address', 'affect', 'against', 'agency', 'agreement', 'almost', 'already', 'although', 'always', 'amount', 'analysis', 'animal', 'another', 'answer', 'anyone', 'anything', 'appear', 'approach', 'around', 'arrive', 'article', 'artist', 'assume', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'beautiful', 'because', 'become', 'before', 'behavior', 'behind', 'believe', 'benefit', 'better', 'between', 'beyond', 'billion', 'brother', 'budget', 'building', 'business', 'camera', 'campaign', 'cancer', 'candidate', 'capital', 'career', 'center', 'central', 'century', 'certain', 'certainly', 'challenge', 'chance', 'change', 'character', 'charge', 'choice', 'choose', 'church', 'citizen', 'clearly', 'collection', 'college', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'consider', 'consumer', 'contain', 'continue', 'control', 'country', 'couple', 'course', 'create', 'cultural', 'culture', 'current', 'customer', 'daughter', 'debate', 'decade', 'decide', 'decision', 'defense', 'degree', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'doctor', 'during', 'economic', 'economy', 'education', 'effect', 'effort', 'either', 'election', 'employee', 'energy', 'enough', 'entire', 'environment', 'especially', 'establish', 'evening', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'expect', 'experience', 'expert', 'explain', 'factor', 'family', 'father', 'federal', 'feeling', 'figure', 'finally', 'financial', 'finger', 'finish', 'follow', 'foreign', 'forget', 'former', 'forward', 'friend', 'future', 'garden', 'general', 'generation', 'government', 'ground', 'growth', 'happen', 'health', 'herself', 'himself', 'history', 'hospital', 'however', 'hundred', 'husband', 'identify', 'imagine', 'impact', 'important', 'improve', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'interview', 'investment', 'involve', 'itself', 'kitchen', 'knowledge', 'language', 'lawyer', 'leader', 'letter', 'likely', 'listen', 'little', 'machine', 'magazine', 'maintain', 'majority', 'manage', 'management', 'manager', 'market', 'marriage', 'material', 'matter', 'measure', 'medical', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'military', 'million', 'minute', 'mission', 'modern', 'moment', 'morning', 'mother', 'movement', 'myself', 'nation', 'national', 'natural', 'nature', 'nearly', 'necessary', 'network', 'newspaper', 'nothing', 'notice', 'number', 'office', 'officer', 'official', 'operation', 'opportunity', 'option', 'organization', 'others', 'outside', 'painting', 'parent', 'participant', 'particular', 'particularly', 'partner', 'patient', 'pattern', 'people', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'physical', 'picture', 'player', 'police', 'policy', 'political', 'politics', 'popular', 'population', 'position', 'positive', 'possible', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'provide', 'public', 'purpose', 'quality', 'question', 'quickly', 'rather', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'require', 'research', 'resource', 'respond', 'response', 'result', 'return', 'reveal', 'school', 'science', 'scientist', 'season', 'second', 'section', 'security', 'senior', 'series', 'serious', 'service', 'several', 'sexual', 'should', 'shoulder', 'significant', 'similar', 'simple', 'simply', 'single', 'sister', 'situation', 'social', 'society', 'soldier', 'somebody', 'someone', 'something', 'sometimes', 'source', 'southern', 'special', 'specific', 'speech', 'spring', 'standard', 'statement', 'station', 'strategy', 'street', 'strong', 'structure', 'student', 'subject', 'success', 'successful', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'surface', 'system', 'teacher', 'technology', 'television', 'themselves', 'theory', 'though', 'thought', 'thousand', 'threat', 'through', 'throughout', 'together', 'tonight', 'toward', 'traditional', 'training', 'travel', 'treatment', 'trouble', 'understand', 'usually', 'various', 'victim', 'violence', 'weapon', 'weight', 'western', 'whatever', 'whether', 'window', 'within', 'without', 'wonder', 'worker', 'writer', 'yourself']

var myGameState = new GameState('') ;
var validTry: boolean;
var guessForm = document.getElementById( 'guess-form' );
var guessedList: string[] = [];

startNewGame();
// Form submission listener
guessForm.addEventListener( 'submit', function ( event ) {
    event.preventDefault();
    // Get the input
    var guessPara = document.getElementById( 'guess-state' );
    var guessField = document.getElementById( 'guess-input' );
    var guessInput = (<HTMLInputElement>guessField)
    var guessValue = guessInput.value;
    guessValue = guessValue.toLowerCase();
    guessInput.value = '';

    // Set communication output element
    var communicationPara = document.getElementById( 'communication');

    // Check validity of the guess and communicate to user if necessary
    validTry = true;

    if ( myGameState.triesLeft === 0 ) {
        validTry = false;
        communicationPara.textContent = "You have to start a new game.";
    }

    for (let i = 0; i < guessedList.length; i++) {
        if ( guessValue === guessedList[i] ) {
            communicationPara.textContent = "You already tried that!";
            validTry = false;
            break;
        }
    }

    // Save this guess for checking with later guesses
    guessedList.push( guessValue );

    // If this is a valid guess
    if ( validTry ) {
        var guessCorrect = false;
        if ( guessValue.length > 1 ) {
            guessCorrect = myGameState.wordCorrect( guessValue );
        } else {
            guessCorrect = myGameState.letterCorrect( guessValue );
        }
        outputState();
        if ( myGameState.leftToGuess === 0 ) {
            communicationPara.textContent = "Congratulations! You win!";
        } else if ( myGameState.triesLeft === 0 ) {
            communicationPara.textContent = "Bad luck. Out of tries. You lose!";
            guessPara.textContent = myGameState.secretWord;
        } else if ( guessCorrect ) {
            communicationPara.textContent = "Good guess!";
        } else {
            communicationPara.textContent = "Nope! hard luck.";
        }
    }

} ) ;

