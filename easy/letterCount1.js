// Using the JavaScript language, have the function LetterCountI(str) take 
//the str parameter being passed and return the first word with the greatest 
// number of repeated letters. For example: "Today, is the greatest day ever!" 
// should return greatest because it has 2 e's (and 2 t's) and it comes before 
// ever which also has 2 e's. If there are no words with repeating letters 
// return -1. Words will be separated by spaces. 

var example = "Today, is the greatest day ever!";  // should return "greatest"
var example2 = "Hello apple pie"; // should return 'Hello'


// keep track of every repeated letter in a word

function letterCount( str ){
	var strArr = str.split(' '),
		counter = 0,
		obj = {
			word: "",
			biggestCount: 0
		};

	// loop through each word
	for ( var i = 0; i < strArr.length; i++ ) {
		// sort each word into alphabetical order
		var a = strArr[i].split('').sort();
		counter = 0;
		
		// loop through each letter in the word
		for ( var j = 0; j < a.length; j++ ) {
			
			// if you have a recurring letter, increment
			if (a[j] === a[j-1]) {
				counter++;
				// if you have a new high count, assign it to the obj
				if ( counter > obj.biggestCount ) {
					obj.word = strArr[i];
					obj.biggestCount = counter;
				}
			} else {
				counter = 0;
			}
		}
	}
	return obj.word;
}