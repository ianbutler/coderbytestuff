// Using the JavaScript language, have the function VowelCount(str) take the str 
// string parameter being passed and return the number of vowels the string contains 
// (ie. "All cows eat grass" would return 5). Do not count y as a vowel for 
// this challenge. 

function vowelCount( str ) {
	var strArr = str.split('');
	var counter = 0;
	for ( var i = 0; i < strArr.length; i++ ) {
		if (
			strArr[i] === "a" 
			|| strArr[i] === "e" 
			|| strArr[i] === "i" 
			|| strArr[i] === "o" 
			|| strArr[i] === "u" 
		) {
			counter++;
		}
	}

	return counter;
}