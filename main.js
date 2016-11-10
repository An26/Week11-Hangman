//main display for the game

//main starts game/game(random word) -> letter (creates spaces)
//main gets guessed letter -> word.js checks if in word (t or f) -> letter prints out letter and spaces to main
//repeats getting letter/check letter until letter "_" = -1
//main finishes the game and console log you done, confirm if they wanna play again - loop over again. 

//main: should be able to play a simple game of hang man, or keepp playing and take down the world and save all the mortys! - give them a random # of morty's saved. (lol!)

//The app should end when a player guesses the correct word or runs out of guesses.

var inquirer = require('inquirer');
var game = require('./game.js')
var Word = require('./word.js');
var letter = require('./letter.js');
var word = new Word();

var win = 0;
var loss = 0;

var theWord = game();

//getGuesses();
beginPlay();



//longer intro - save for later
function beginPlay(){
	console.log('Welcome to planet of Hang-Morty\'s! \nMy name is Galdos, I am your AI guide for this world. \nWe\'ve searched multiple universes and gathered hundreds of Morty\'s for you to hang and have fun! Enjoy hanging Mortys!!');

	inquirer.prompt({
		type: 'confirm',
		name: 'toPlay',
		message: '**********Would you like to play Hang-Morty???**********'
	}).then(function(response){
		if (response.toPlay === true){
			console.log('Gooodddd welllcome. Please lose as many times as you would like.... \nSeriously LOSE, we like seeing Mortys hung-- i mean, put to use!... \n...There\'s a slice a cake for every Morty you hang.');

			getGuesses();

		} else {
			console.log('Alllrighty then, there\'s always one creature who rebels and refuses to hand Mortys... \nOFF WITH YOU, BYE!');
			return;
		}
	});
}

function getGuesses() {
	console.log('Guess this word: ' );
	var letterCheck = /^[a-zA-Z]+$/;
	inquirer.prompt({
		type: 'input',
		name: 'userLetter',
		message: 'Please give me a letter',
		validate: function(input) {
			if (input.match(letterCheck)) {
				//console.log('its a char!: ' + input);
				return true;
			} else {
				console.log('\n that is not a letter...');
				return;
			}
		}
	}).then(function(data) {
//-----------------------------------RIGHT HERRE!
		console.log('letter!!:' + data.userLetter);


		//is this letter in theWord?


		word.checkLetter(data.userLetter);
		
		
	});
};
















