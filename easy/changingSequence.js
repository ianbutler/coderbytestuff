// Using the JavaScript language, have the function ChangingSequence(arr)
// take the array of numbers stored in arr and return the index at which
// the numbers stop increasing and begin decreasing or stop decreasing
// and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1]
// then your program should return 3 because 6 is the last point in the
// array where the numbers were increasing and the next number begins a
// decreasing sequence. The array will contain at least 3 numbers and it
// may contains only a single sequence, increasing or decreasing. If there
// is only a single sequence in the array, then your program should return -1.
// Indexing should begin with 0. 

function changingSequence( arr ) {
	var status = (arr[1] - arr[0] > 0)?"positive":"negative",
		newStatus;

	for ( var i = 2; i < arr.length; i++ ) {
		newStatus = (arr[i] - arr[i-1] > 0)?"positive":"negative";
		if ( status !== newStatus ) {
			return i-1;
		}
	}

	return -1;
}