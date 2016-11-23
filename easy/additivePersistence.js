// Using the JavaScript language, have the function AdditivePersistence(num)
// take the num parameter being passed which will always be a positive
// integer and return its additive persistence which is the number of times
// you must add the digits in num until you reach a single digit. For
// example: if num is 2718 then your program should return 2
// because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

function additivePersistence( num ) {
	var numArr,
		sum,
		newNum = num.toString();

	while (newNum.toString().length > 1) {	
		numArr = newNum.split('');
		sum = numArr.reduce(function( a, b ) {
			return parseInt(a) + parseInt(b);
		});
		newNum = sum.toString();
	} 

	return sum;
}