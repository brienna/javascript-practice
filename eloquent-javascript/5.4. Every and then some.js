/* 5.4. Every and then some

Arrays also come with the standard methods every and some. Both take a predicate function that, 
when called with an array element as argument, returns true or false. Just like && returns a 
true value only when the expressions on both sides are true, every returns true only when the 
predicate returns true for all elements of the array. Similarly, some returns true as soon as 
the predicate returns true for any of the elements. They do not process more elements than 
necessary—for example, if some finds that the predicate holds for the first element of the array, 
it will not look at the values after that.

Write two functions, every and some, that behave like these methods, except that they take the 
array as their first argument rather than being a method. */

function every(array, action) {
    for (var i = 0; i < array.length; i++) {
        if (!action(array[i])) { // if predicate returns false for current element
            return false;
        }  
    }
    return true; // if predicate is true for all elements
}

function some(array, action) {
    for (var i = 0; i < array.length; i++) {
        if (action(array[i])) { // if predicate returns true for current element
            return true;
        }
    }
    return false; // if predicate is false for all elements
}

debug(every([NaN, NaN, NaN], isNaN)); // prints true
debug(every([NaN, NaN, 4], isNaN)); // prints false
debug(some([NaN, 3, 4], isNaN)); // prints true
debug(some([2, 3, 4], isNaN)); // prints false 


// Eloquent JavaScript answer: 
function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN)); // prints true
console.log(every([NaN, NaN, 4], isNaN)); // prints false
console.log(some([NaN, 3, 4], isNaN)); // prints true
console.log(some([2, 3, 4], isNaN)); // prints false
