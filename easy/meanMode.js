// Using the JavaScript language, have the function MeanMode(arr) take 
// the array of numbers stored in arr and return 1 if the mode equals the 
// mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should 
// return 1 because the mode (3) equals the mean (3)). The array will not 
// be empty, will only contain positive integers, and will not contain more 
// than one mode. 

function meanMode( arr ) {

	// find mean
	var total = arr.reduce(function( a, b ){
		return a + b;
	});
	var mean = total / arr.length;

	var counter = 0;

	var sorted = arr.sort(function(a,b){
		return a - b;
	});

	var obj = {
		mode: sorted[0],
		count: 0,
	};

	for ( var i = 0; i < sorted.length; i++ ) {
		if (sorted[i] === sorted[i-1]) {
			counter++
			if (counter > obj.count) {
				obj.mode = sorted[i];
				obj.count = counter;
			}
		} else {
			counter = 0;
		}
	}

	var equal = (mean === obj.mode)?1:0;

	return equal;
	// find mode
}