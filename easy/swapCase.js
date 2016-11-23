// Using the JavaScript language, have the function SwapCase(str) take
// the str parameter and swap the case of each character. 
// For example: if str is "Hello World" the output should be hELLO wORLD.
// Let numbers and symbols stay the way they are. 

function swapCase( str ) {
	var newStr = "";
	for ( var i = 0; i < str.length; i++ ) {

		if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
			newStr += String.fromCharCode( str.charCodeAt(i) + 32 );
		} else {
			newStr += String.fromCharCode( str.charCodeAt(i) - 32 );
		}
	}

	return newStr;
}