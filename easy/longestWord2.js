// Using the JavaScript language, have the function LongestWord(sen) take 
// the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the first 
// word from the string with that length. Ignore punctuation and assume sen 
// will not be empty. 


function longestWord(sen) {

	var longestWord = '',
		senArr = sen.split(' ');

	for ( var i = 0; i < senArr.length; i++ ) {
		if (senArr[i].length > longestWord) {
			longestWord = senArr[i];
		}
	}

	return longestWord;
}