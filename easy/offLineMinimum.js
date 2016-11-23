// Using the JavaScript language, have the function OffLineMinimum(strArr)
// take the strArr parameter being passed which will be an array of
// integers ranging from 1...n and the letter "E" and return the correct
// subset based on the following rules. The input will be in the following
// format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for
// integers and the E means take out the smallest integer currently in
// the whole set. When finished, your program should return that new set
// with integers separated by commas. For example: if strArr
// is ["5","4","6","E","1","7","E","E","3","2"] then your program should
// return 4,1,5. 


function offLineMinimum( strArr ) {
	var returnArr = [],
		sortedArr = [];

	for ( var i = 0; i < strArr.length; i++ ) {
		if ( strArr[i] === "E" ) {
			sortedArr.sort(function(a,b) {
				return parseInt(b) - parseInt(a);
			});
			returnArr.push(sortedArr.pop());
		} else {
			sortedArr.push(strArr[i]);
		}
	}

	return returnArr.join(",");
}