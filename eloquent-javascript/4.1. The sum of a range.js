/* 4.1. The sum of a range

Write a range function that takes two arguments, start and end, and returns an array containing 
all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that 
indicates the “step” value used to build up the array. If no step is given, the array elements 
go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) 
should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that 
range(5, 2, -1) produces [5, 4, 3, 2]. */

function range(start, end, step) {
  step = step || 1;
  var numbers = [];

  if (start < end) {
    for (var n = start; n <= end; n += step) {  
      numbers.push(n); 
    }
  }
  else {
    for (var n2  = start; n2 >= end; n2 += step) {
      numbers.push(n2);
    }
  }

  return numbers;
}

function sum(numbers) {
  var total = 0;

  for (var i = 0; i < numbers.length; i++) { 
     total += numbers[i]; 
  }

  return total;
}

debug(sum(range(1, 10, 2))); // prints [1, 3, 5, 7, 9]
debug(range(5, 2, -1)); // prints [5, 4, 3, 2]


// Eloquent JavaScript answer: 
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(sum(range(1, 10))); // prints 55
console.log(range(5, 2, -1)); // prints [5, 4, 3, 2]

