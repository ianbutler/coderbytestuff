// Using the JavaScript language, have the function SimpleAdding(num) 
// add up all the numbers from 1 to num. For the test cases, the parameter num 
// will be any number from 1 to 1000. 

// Use the Parameter Testing feature in the box below to 
// test your code with different arguments.

function simpleAdding( num ) {
	var addedNum = num;
	var decrementNum = num - 1;

	while ( decrementNum > 0 ) {
		addedNum += decrementNum;
		decrementNum--;
	}

	return addedNum;
}

simpleAdding( num );