// Using the JavaScript language, have the function FirstFactorial(num) take the
//  num parameter being passed and return the factorial of it 
// (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, 
// the range will be between 1 and 18. 

// Use the Parameter Testing feature in the box below to 
// test your code with different arguments.


// my first attempt
/*function firstFactorial( num ) {
	var factorial = num,
		decrementNum = num - 1;

	while ( decrementNum > 0 ) {
		factorial *= decrementNum;
		decrementNum--;
	}

	return factorial;
}*/

// solution 1
function firstFactorial( num ) {
	var factorial = 1;

	for ( var i = 1; i <= num; i++ ) {
		factorial = factorial * i;
	}

	return factorial;
}