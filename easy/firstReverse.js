// Using the JavaScript language, have the function FirstReverse(str) 
// take the str parameter being passed and return the string in reversed order. 

//Use the Parameter Testing feature in the box below to test 
// your code with different arguments.


// my shitty first attempt
/*function firstReverse(str) {
	var reversedStr = "",
		strArr = str.split('');

	for ( var i = strArr.length-1; i >= 0; i-- ) {
		reversedStr += strArr[i];
	}

	return reversedStr;
}*/



// solution answer 1
/*function firstReverse( str ) {
	var newStr = "";

	for ( var i = str.length - 1; i >= 0; i-- ) {
		newStr += str[i];
	}

	return newStr;
}*/


// solution answer 2
function firstReverse( str ) {
	return str.split('').reverse().join('');
}