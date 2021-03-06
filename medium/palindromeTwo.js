// Using the JavaScript language, have the function PalindromeTwo(str) take the
// str parameter being passed and return the string true if the parameter is a
// palindrome, (the string is the same forward as it is backward) otherwise
// return the string false. The parameter entered may have punctuation and symbols
// but they should not affect whether the string is in fact a palindrome. 
// For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 

function palindromeTwo( str ) {
	var letters = /[A-Z]/gi;
	var arr = str.match(letters);

	var len = (arr.length/2) + 1
	for ( var i = 0, j = arr.length-1; i < len; i++, j-- ) {
		if ( arr[i].toLowerCase() !== arr[j].toLowerCase() ) {
			return false;
		}
	}

	return true;
}