/*  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.  */

// Solution 1: 
function persistence(num) {
	num = num.toString();
	var multiplications = 0;
	for (var product = 1; num.length > 1;) {
		num = num.toString();
		for (var i = 0; i < num.length; i++) {
			product *= num[i];
		}
		num = product.toString();
		multiplications++; 
		product = 1;
	}
	return multiplications;
}

// Solution 2: 
function persistence(num) {
	digits = num.toString().split("");
	var multiplications = 0;
	while (digits.length > 1) {
		digits = digits.reduce(function(a, b) {
			return a * b;
		}).toString().split("");
		multiplications++;
	}
	return multiplications;
}

// Solution 3 (coded by @atroxic):
function persistence(num) {
	digits = num.toString().split('');
	if (digits.length === 1) {
		return 0;
	} else {
		num = digits.reduce(function(a, b) { 
			return a * b; 
		});
		return persistence(num) + 1;
	}
}

persistence(999); 
// because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
persistence(39);
// because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

/* Solution timings:
1st: 308 ms
2nd: 315 ms
3rd: 308 ms
*/
