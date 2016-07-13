/* Moving zeros to the end

Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.  */

var moveZeros = function (arr) {
	var zeroes = [];
	var output = [];
	
	arr.forEach(function(value) {
		if (value === 0) {
			zeroes.push(value);
		} else {
			output.push(value);
		}
	});
	
	output = output.concat(zeroes);
	return output;
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));  // returns [false,1,1,2,1,3,"a",0,0]
