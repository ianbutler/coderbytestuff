// Using the JavaScript language, have the function ABCheck(str) take the 
// str parameter being passed and return the string true if the characters 
// a and b are separated by exactly 3 places anywhere in the string at least 
// once (ie. "lane borrowed" would result in true because there is exactly 
// three characters between a and b). Otherwise return the string false. 


function abCheck( str ) {
	var len = str.length;
	for ( var i = 0; i < len; i++ ) {
		if ( str[i] === 'a' ) {
			if ( str[i + 3] === 'b' || str[i-3] === 'b' ) {
				return true;
			}
		}
	}
	return false;
}