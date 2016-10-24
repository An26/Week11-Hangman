//game.js file will randomly select a word for the player.
//takes an array from somewhere, finds a random word in it, and returns that string. 

var Word = require('./word.js');
var Letter = require('./letter.js');

//made for testing
module.exports= function getRandomWord() {
	var wordsArray = ["rick", "morty", "summer", "jerry", "beth", "meseeks", "squanchy", "plutonians", "snuffles", "snowball", "cromulons", "unity", "gazorpazorp"];

	//console.log(wordsArray);

	//finding a random word using wordsArray
	var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

	//taking that random word, and splitting it up into an array
	var randomWordArray = randomWord.split('');

	//creating a new instance of our new randomized word
	var constructWord = new Word();
	console.log('new instance: ' + constructWord);

	//pushes this array of random word to word.js to use in it's Word.addLetter constructor
	randomWordArray.forEach(function(letter) {
		constructWord.addLetter(letter);
	})

	console.log(constructWord);

	console.log("spliced guess word: " + randomWordArray);

	return randomWordArray;
};

//made for testing
//getRandomWord();
