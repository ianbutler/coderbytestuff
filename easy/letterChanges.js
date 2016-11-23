// Using the JavaScript language, have the function LetterChanges(str) 
// take the str parameter being passed and modify it using the following algorithm. 
// Replace every letter in the string with the letter following it in the 
// alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel 
// in this new string (a, e, i, o, u) and finally return this modified string. 

// Use the Parameter Testing feature in the box below to 
//test your code with different arguments.

function letterChanges( str ) {
	var charCode, newString, strArr = str.split('');

	for ( var i = 0; i < strArr.length; i++ ) {
		charCode = strArr[i].charCodeAt(0);
		
		strArr[i] = String.fromCharCode(charCode + 1);

		if (strArr[i] === 'a' || strArr[i] === 'e' || strArr[i] === 'i' || strArr[i] === 'o' || strArr[i] === 'u') {
			strArr[i] = strArr[i].toUpperCase();
		}
	}

	newString = strArr.join('')

	return newString;
}

letterChanges("cheese");
