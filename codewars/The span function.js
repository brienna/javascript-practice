/* The span function

The span function is a good one to know. It accepts an array and a predicate function and returns two arrays. 
The first array contains all the elements of the argument array up to the item that caused the first failure 
of the predicate. The second returned array contains the rest of the original array. The original array is 
not modified.

For example,

function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]

Your task is to...wait for it... write your own span function!!! */

function span(arr, predicate) {
  var firstArray = [];
  var secondArray = [];
  var returnedArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      var secondArray = arr.slice(i, arr.length);
      break;
    } else {
      firstArray.push(arr[i]);
    }        
  }
  
  returnedArray.push(firstArray, secondArray);
  return returnedArray;
}
