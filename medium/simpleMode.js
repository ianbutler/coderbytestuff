// Using the JavaScript language, have the function SimpleMode(arr) take the
// array of numbers stored in arr and return the number that appears most
// frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the 
// output should be 4. If there is more than one mode return the one that
// appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because
// it appeared first). If there is no mode return -1. The array will not be empty. 

function simpleMode( arr ) {
	var oldArr = arr.slice(); // deep copy
	var sorted = arr.sort(function(a,b){ return a - b; }),
		mode,
		highest = 1,
		count = 1;
	
	for ( var i = 1; i < sorted.length; i++ ) {
		if ( sorted[i] === sorted[i-1] ) {
			count++;
			if ( highest < count ) { 
				highest = count;
				mode = sorted[i]; 
			} else if ( highest === count ) {
				for ( var j = 0; j < oldArr.length; j++ ) {
					if ( oldArr[j] === mode ) {
						j = oldArr.length;
					} else if ( oldArr[j] === sorted[i] ) {
						mode = sorted[i];
						j = oldArr.length;
					}
				}
			}
		} else {
			count = 1;
		}
		
	}

	return mode;
}