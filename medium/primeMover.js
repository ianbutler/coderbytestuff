// Using the JavaScript language, have the function PrimeMover(num) return
// the numth prime number. The range will be from 1 to 10^4. 
// For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

function primeMover( num ) {
	var primeCounter = 0,
		numCounter = 1;

	while ( primeCounter < num ) {
		numCounter++;
		// primeTime() is from  primeTime.js
		if ( primeTime(numCounter) ) {
			primeCounter++;
		}
	}

	return numCounter;
}