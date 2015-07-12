/* 
Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new 
array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it 
modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
*/

var reverseArray = function(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) { // loop through array from start to end, 
    newArray.unshift(array[i]); // add each element to front of newArray 
  }

  return newArray;
};

var reverseArrayInPlace = function(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) { // loop through array from start to end,
    var mirror = (array.length - 1) - i; // hold index of current element's mirror image (first/last, second/second-to-last, etc)
    var current = array[i]; // hold current element 
    array[i] = array[mirror]; // replace current element with its mirror image
    array[mirror] = current; // replace mirror image with current element
  }

  return array;
};

debug(reverseArray(["A", "B", "C"])); // prints ["C", "B", "A"]
debug(reverseArrayInPlace([1, 2, 3, 4, 5])); // prints [5, 4, 3, 2, 1]


// Eloquent JavaScript answer:
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
