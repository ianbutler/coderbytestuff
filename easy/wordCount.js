// Using the JavaScript language, have the function WordCount(str) take the 
// str string parameter being passed and return the number of words the 
// string contains (ie. "Never eat shredded wheat" would return 4). Words 
// will be separated by single spaces. 

function wordCount(str) {
	var strArr = str.split(' ');

	for ( var i = 0; i < strArr.length; i++ ) {
		if ( strArr[i] === '' ) {
			strArr.splice(i, 1)
			i--;
		}
	}

	return strArr.length;
}