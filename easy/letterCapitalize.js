// Using the JavaScript language, have the function LetterCapitalize(str) 
// take the str parameter being passed and capitalize the first letter 
// of each word. Words will be separated by only one space. 

// Use the Parameter Testing feature in the box below to 
// test your code with different arguments.

function letterCapitalize( str ) {

	var newStr, word, 
		strArr = str.split(' ');

	for ( var i = 0; i < strArr.length; i++ ) {
		word = strArr[i][0].toUpperCase();
		strArr[i] = word + strArr[i].slice(1);
	}

	newStr = strArr.join(' ');

	return newStr;
}

letterCapitalize("Hello my dearest bob");