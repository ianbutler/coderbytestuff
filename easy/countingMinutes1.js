// Using the JavaScript language, have the function CountingMinutesI(str) 
// take the str parameter being passed which will be two times (each properly 
// formatted with a colon and am or pm) separated by a hyphen and return
// the total number of minutes between the two times. The time will be in
// a 12 hour clock format. For example: if str is 9:00am-10:00am then the
// output should be 60. If str is 1:00pm-11:00am the output should be 1320. 


/*
*
*
*
*		NOT FINISHED
*
*
*
*/


function countingMinutes( str ) {
	var obj = {
		hour0: "",
		hour1: "",
		min0: "",
		min1: "",
		time0: '',
		time1: ''
	};

	var timeArr = str.split('-');
	obj.time0 = timeArr[0];
	obj.time1 = timeArr[1];

	var colonIndex0 = obj.time0.indexOf(':');
	var colonIndex1 = obj.time1.indexOf(':');

	obj.hour0 = obj.time0.slice( 0, colonIndex0 );
	obj.hour1 = obj.time1.slice( 0, colonIndex1 );

	obj.min0 = obj.time0.slice( colonIndex0 + 1, obj.time0.length - 2 );
	obj.min1 = obj.time1.slice( colonIndex1 + 1, obj.time1.length - 2 );

	console.log(obj);
}