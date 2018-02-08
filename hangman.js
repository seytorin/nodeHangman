
var Word = require('./word.js');
var prompt = require('prompt');
var le = require('./letter.js');

console.log("Let's Play Hangman!");
console.log("Guess the name of a car maker. Pick a letter!\n");

prompt.start();



game = {
 	hangmanWords: ['toyota', 'honda', 'lamborghini', 'ferrari', 'jaguar', 'volkswagen', 'ford'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	randWord: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.randWord = new Word(this.hangmanWords[Math.floor(Math.random()* this.hangmanWords.length)]);
 		this.randWord.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guess'], function(err, result){
 			console.log("You guessed: " + result.guess);
 			var manyGuessed = self.randWord.checkLetter(result.guess);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.randWord.findWord()){
 						console.log("You won!");
 						console.log(self.randWord.wordRender());
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log(self.randWord.wordRender());
 			if((self.guessesRemaining > 0) && (self.randWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.randWord.target);
 			} else {
 				console.log(self.randWord.wordRender());
 			}
 		});

 	}


};

game.startGame();
