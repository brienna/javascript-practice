/* 5.1. Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the input arrays. */

var arrays = [[1, 2, 3], [4, 5], [6]];

var array = arrays.reduce(function(previousArray, currentArray) { // combines array elements, starting from the left
                return previousArray.concat(currentArray); // by concatenating current element to previous element
            }) 

debug(array); // prints [1, 2, 3, 4, 5, 6]


// Eloquent JavaScript answer:
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, [])); // prints [1, 2, 3, 4, 5, 6]
