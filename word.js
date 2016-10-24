//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

//check if letter guessed is in word

var Letter = require('./letter.js')


module.exports = function Word() {
	this.letterArray = [];
	this.guessedWord = false;

    //uses Letter constructor to make array of objects with the randomWordArray from word.js
    this.addLetter = function(letter) {
        var letterObject = new Letter(letter);
        this.letterArray.push(letterObject);
        console.log('letter array: ' + this.letterArray);
        //console.log('char: ' + letterObject.char);  
        //console.log('Guessed yet?: ' + letterObject.guessedYet);
        //console.log('char or _ ?: ' + letterObject.display());
    };


    //checks if the user's guess is in the word/letter array, if it is... assign a "true" value for its guessed property.
    this.checkLetter = function(userGuessLetter){
        var self = this;
        console.log('letter is getting checked');
        console.log(this.letterArray);
        console.log();        

        this.letterArray.forEach(function(compareLetter){
            console.log(userGuessLetter, compareLetter.char)
            if(userGuessLetter === compareLetter.char){
                compareLetter.guessedYet = true;
                compareLetter.display();
            }
        });
    };
    //where is guessedWord?
    this.checkWord = function() {
		if (guessedWord == true) {
            //win ++;
            var winningWord = this.letterArray.join(',');
			console.log('you saved a Morty! the word was: ' + winningWord);
		}
	};
    //sort through array of Letter objects, taking only char. add it to variable, and then console.log that.
    this.printWord = function() {
	   // this.letterArray.forEach(function) {


    //    })
    }

};




