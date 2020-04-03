var GameState = (function () {
    function GameState(secretWord) {
        this.newWord(secretWord);
    }
    GameState.prototype.newWord = function (word) {
        this.secretWord = word;
        this.guessedWord = '';
        this.secretLetters = [];
        this.guessedState = [];
        for (var i = 0; i < word.length; i++) {
            this.secretLetters[i] = word.slice(i, i + 1);
            this.guessedState[i] = '_';
            this.guessedWord = this.guessedWord + '_';
        }
        this.wrongGuesses = '';
        this.leftToGuess = word.length;
        this.triesLeft = 6;
    };
    GameState.prototype.letterCorrect = function (testChar) {
        var letterFound = false;
        this.guessedWord = '';
        for (var i = 0; i < this.secretLetters.length; i++) {
            if (testChar === this.secretLetters[i]) {
                this.guessedState[i] = this.secretLetters[i];
                this.leftToGuess--;
                letterFound = true;
            }
            this.guessedWord = this.guessedWord + this.guessedState[i];
        }
        if (!letterFound) {
            this.triesLeft--;
            this.wrongGuesses = this.wrongGuesses + testChar;
        }
        return letterFound;
    };
    GameState.prototype.wordCorrect = function (testWord) {
        var wordFound = false;
        if (testWord === this.secretWord) {
            this.guessedState = this.secretLetters;
            this.guessedWord = this.secretWord;
            this.leftToGuess = 0;
            wordFound = true;
        }
        else {
            this.triesLeft--;
        }
        return wordFound;
    };
    return GameState;
}());
;
var startNewGame = function () {
    guessedList = [];
    var randomIndex = Math.floor(Math.random() * wordsList.length);
    myGameState.newWord(wordsList[randomIndex]);
    outputState();
    var communicationPara = document.getElementById('communication');
    communicationPara.textContent = "";
};
var ClearCommunication = function () {
    var communicationPara = document.getElementById('communication');
    communicationPara.textContent = "";
};
var outputState = function () {
    var GuessPara = document.getElementById('guess-state');
    GuessPara.textContent = myGameState.guessedWord;
    var uncontainedSpan = document.getElementById('uncontained-letters');
    uncontainedSpan.textContent = myGameState.wrongGuesses;
    var triesLeftSpan = document.getElementById('tries-left');
    triesLeftSpan.textContent = String(myGameState.triesLeft);
};
var wordsList = ['ability', 'accept', 'according', 'account', 'across', 'action', 'activity', 'actually', 'address', 'affect', 'against', 'agency', 'agreement', 'almost', 'already', 'although', 'always', 'amount', 'analysis', 'animal', 'another', 'answer', 'anyone', 'anything', 'appear', 'approach', 'around', 'arrive', 'article', 'artist', 'assume', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'beautiful', 'because', 'become', 'before', 'behavior', 'behind', 'believe', 'benefit', 'better', 'between', 'beyond', 'billion', 'brother', 'budget', 'building', 'business', 'camera', 'campaign', 'cancer', 'candidate', 'capital', 'career', 'center', 'central', 'century', 'certain', 'certainly', 'challenge', 'chance', 'change', 'character', 'charge', 'choice', 'choose', 'church', 'citizen', 'clearly', 'collection', 'college', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'consider', 'consumer', 'contain', 'continue', 'control', 'country', 'couple', 'course', 'create', 'cultural', 'culture', 'current', 'customer', 'daughter', 'debate', 'decade', 'decide', 'decision', 'defense', 'degree', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'doctor', 'during', 'economic', 'economy', 'education', 'effect', 'effort', 'either', 'election', 'employee', 'energy', 'enough', 'entire', 'environment', 'especially', 'establish', 'evening', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'expect', 'experience', 'expert', 'explain', 'factor', 'family', 'father', 'federal', 'feeling', 'figure', 'finally', 'financial', 'finger', 'finish', 'follow', 'foreign', 'forget', 'former', 'forward', 'friend', 'future', 'garden', 'general', 'generation', 'government', 'ground', 'growth', 'happen', 'health', 'herself', 'himself', 'history', 'hospital', 'however', 'hundred', 'husband', 'identify', 'imagine', 'impact', 'important', 'improve', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'interview', 'investment', 'involve', 'itself', 'kitchen', 'knowledge', 'language', 'lawyer', 'leader', 'letter', 'likely', 'listen', 'little', 'machine', 'magazine', 'maintain', 'majority', 'manage', 'management', 'manager', 'market', 'marriage', 'material', 'matter', 'measure', 'medical', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'military', 'million', 'minute', 'mission', 'modern', 'moment', 'morning', 'mother', 'movement', 'myself', 'nation', 'national', 'natural', 'nature', 'nearly', 'necessary', 'network', 'newspaper', 'nothing', 'notice', 'number', 'office', 'officer', 'official', 'operation', 'opportunity', 'option', 'organization', 'others', 'outside', 'painting', 'parent', 'participant', 'particular', 'particularly', 'partner', 'patient', 'pattern', 'people', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'physical', 'picture', 'player', 'police', 'policy', 'political', 'politics', 'popular', 'population', 'position', 'positive', 'possible', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'provide', 'public', 'purpose', 'quality', 'question', 'quickly', 'rather', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'require', 'research', 'resource', 'respond', 'response', 'result', 'return', 'reveal', 'school', 'science', 'scientist', 'season', 'second', 'section', 'security', 'senior', 'series', 'serious', 'service', 'several', 'sexual', 'should', 'shoulder', 'significant', 'similar', 'simple', 'simply', 'single', 'sister', 'situation', 'social', 'society', 'soldier', 'somebody', 'someone', 'something', 'sometimes', 'source', 'southern', 'special', 'specific', 'speech', 'spring', 'standard', 'statement', 'station', 'strategy', 'street', 'strong', 'structure', 'student', 'subject', 'success', 'successful', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'surface', 'system', 'teacher', 'technology', 'television', 'themselves', 'theory', 'though', 'thought', 'thousand', 'threat', 'through', 'throughout', 'together', 'tonight', 'toward', 'traditional', 'training', 'travel', 'treatment', 'trouble', 'understand', 'usually', 'various', 'victim', 'violence', 'weapon', 'weight', 'western', 'whatever', 'whether', 'window', 'within', 'without', 'wonder', 'worker', 'writer', 'yourself'];
var myGameState = new GameState('');
var validTry;
var guessForm = document.getElementById('guess-form');
var guessedList = [];
startNewGame();
guessForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var guessPara = document.getElementById('guess-state');
    var guessField = document.getElementById('guess-input');
    var guessInput = guessField;
    var guessValue = guessInput.value;
    guessValue = guessValue.toLowerCase();
    guessInput.value = '';
    var communicationPara = document.getElementById('communication');
    validTry = true;
    if (myGameState.triesLeft === 0) {
        validTry = false;
        communicationPara.textContent = "You have to start a new game.";
    }
    for (var i = 0; i < guessedList.length; i++) {
        if (guessValue === guessedList[i]) {
            communicationPara.textContent = "You already tried that!";
            validTry = false;
            break;
        }
    }
    guessedList.push(guessValue);
    if (validTry) {
        var guessCorrect = false;
        if (guessValue.length > 1) {
            guessCorrect = myGameState.wordCorrect(guessValue);
        }
        else {
            guessCorrect = myGameState.letterCorrect(guessValue);
        }
        outputState();
        if (myGameState.leftToGuess === 0) {
            communicationPara.textContent = "Congratulations! You win!";
        }
        else if (myGameState.triesLeft === 0) {
            communicationPara.textContent = "Bad luck. Out of tries. You lose!";
            guessPara.textContent = myGameState.secretWord;
        }
        else if (guessCorrect) {
            communicationPara.textContent = "Good guess!";
        }
        else {
            communicationPara.textContent = "Nope! hard luck.";
        }
    }
});
//# sourceMappingURL=main.js.map