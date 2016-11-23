// Using the JavaScript language, have the function StringScramble(str1,str2)
// take both parameters being passed and return the string true if a portion of
// str1 characters can be rearranged to match str2, otherwise return the string
// false. For example: if str1 is "rkqodlw" and str2 is "world" the output
// should return true. Punctuation and symbols will not be entered with the
// parameters. 

function stringScramble( str1, str2 ) {

	var shortest = (str1.length < str2.length)?str1:str2;
	var longest = (str1.length > str2.length)?str1:str2;
	for ( var i = 0; i < shortest.length; i++ ) {
		if ( longest.indexOf(shortest[i]) < 0 ) {
			return false;
		}
	}
	return true;
}