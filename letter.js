//letter.js should control whether or not a letter appears as a "_" or as itself on-screen. 

//recieves random word and then creates "_" array (initial)
//prints it on the page too.

var game = require('./game.js');
//what is this?

module.exports = function Letter(char) {
	this.char = char,
	this.guessedYet = false,
	this.display = function() {
		if (this.guessedYet == false) {
			console.log('_');
			//this.char = '_';
		} else {
			//return this.char;
			console.log("char:", this.char);
		}
	}
}
