// Using the JavaScript language, have the function 
// MultiplicativePersistence(num) take the num parameter being passed
// which will always be a positive integer and return its multiplicative
// persistence which is the number of times you must multiply the digits
// in num until you reach a single digit. For example: if num is 39 then
// your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and
// finally 1 * 4 = 4 and you stop at 4. 


function multiplicativePersistence( num ) {
	var numArr,
		product,
		newNum = num.toString();

	while (newNum.toString().length > 1) {	
		numArr = newNum.split('');
		product = numArr.reduce(function( a, b ) {
			return parseInt(a) * parseInt(b);
		});
		newNum = product.toString();
	} 

	return product;
}