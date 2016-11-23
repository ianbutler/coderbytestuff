// Using the JavaScript language, have the function PrimeTime(num) take the num
// parameter being passed and return the string true if the parameter is a
// prime number, otherwise return the string false. The range will be
// between 1 and 2^16.

function primeTime( num ){
	var newNum = num - 1;

	while ( newNum > 1) {
		if ( num / newNum === Math.floor(num/newNum) ) {
			return false;
		}

		newNum--;
	}
	return true;
}