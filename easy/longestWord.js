// Using the JavaScript language, have the function LongestWord(sen) take 
// the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the 
// first word from the string with that length. Ignore punctuation and assume 
// sen will not be empty. 

// Use the Parameter Testing feature in the box below to 
// test your code with different arguments.

function longestWord( sen ) {

	var wordArr = sen.split(' '),
		longestWord = wordArr[0];

	for ( var i = 1; i < wordArr.length; i++ ) {
		if ( wordArr[i].length > wordArr[i-1].length ) {
			longestWord = wordArr[i];
		}
	}

	return longestWord;
}

longestWord("Hi my name is Ian");