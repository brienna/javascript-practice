/* Find the odd int

Given an array, find the int that appears an odd number of times. 
There will always be only one integer that appears an odd number of times. */


function findOdd(A) {
	// Count integer frequency 
	integers = {};
	for (var i = 0; i < A.length; i++) {
		if (!integers[A[i]]) {
			integers[A[i]] = 1;
		} else {
			integers[A[i]]++;
		}
	}
	
	// Find the integer with an odd frequency
	for (int in integers) {
		if (integers[int] % 2 != 0) {
			return Number(int);
		}
	}
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);  // 5
findOdd([1,1,1,1,1,1,10,1,1,1,1]);  // 10
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);  // -1


// Revision 1: Use forEach() instead of first for loop

function findOdd(A) {
	// Count integer frequency 
	integers = {};
	A.forEach(function(int, i) {
		if (!integers[int]) {
			integers[int] = 1;
		} else {
			integers[int]++;
		}
	});
	
	// Find the integer with an odd frequency
	for (int in integers) {
		if (integers[int] % 2 != 0) {
			return Number(int);
		}
	}
}
