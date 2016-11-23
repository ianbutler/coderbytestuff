// Using the JavaScript language, have the function ExOh(str) take the str 
// parameter being passed and return the string true if there is an equal 
// number of x's and o's, otherwise return the string false. Only these two 
// letters will be entered in the string, no punctuation or numbers. 
// For example: if str is "xooxxxxooxo" then the output should return false 
// because there are 6 x's and 5 o's. 

function exOh(str) {
	var xCount = 0;
	var oCount = 0;
	var strArr = str.split('');

	for ( var i = 0; i < strArr.length; i++ ) {
		if ( strArr[i] === 'x' ) { xCount++; }
		if ( strArr[i] === 'o' ) { oCount++; }
	}

	return (xCount === oCount)?true:false;
}