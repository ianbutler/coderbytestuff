// Using the JavaScript language, have the function NumberAddition(str)
// take the str parameter, search for all the numbers in the string,
// add them together, then return that final number. For example: if
// str is "88Hello 3World!" the output should be 91. You will have
// to differentiate between single digit numbers and multiple digit
// numbers like in the example above. So "55Hello" and "5Hello 5"
// should return two different answers. Each string will contain at
// least one letter or symbol. 


function numberAddition( str ) {
	var counter,
		currentVal,
		sum = 0;

	for ( var i = 0; i < str.length; i += counter ) {
		counter = 1;
		if ( !isNaN(parseInt(str[i])) ) {
			currentVal = str[i];
			while ( !isNaN(parseInt(str[i + counter])) ) {
				currentVal += str[i + counter];
				counter++;
			}
			sum += parseInt(currentVal);
		} 
	}

	return sum;
} 