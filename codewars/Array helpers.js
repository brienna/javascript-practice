/* Array helpers

This kata is designed to test your ability to extend the functionality of built-in JavaScript classes. In this case, 
we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed  */

Array.prototype.square = function() {
	var arr = this.map(function(num) {
		return num * num;
	});
	return arr;
};

Array.prototype.cube = function() {
	var arr = this.map(function(num) {
		return num * num * num;
	});
	return arr;
};

Array.prototype.average = function() {
	var num = this.length;
	var total = this.sum();
	var avg = total/num;
	return avg;
};

Array.prototype.sum = function() {
	if (this.length > 0) {
		var total = this.reduce(function(a, b) {
			return a + b;
		});	
		return total;
	} else {
		return NaN;
	}
};

Array.prototype.even = function() {
	var arr = this.filter(function(num) {
		if (num % 2 === 0) {
			return true;
		} else {
			return false;
		}
	});
	return arr;
};

Array.prototype.odd = function() {
	var arr = this.filter(function(num) {
		if (num % 2 === 0) {
			return false;
		} else {
			return true;
		}
	});
	return arr;
};

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even()); // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5]
