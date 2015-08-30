/* 4.4. Deep comparison

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects 
with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have 
to take one silly exception into account: by a historical accident, typeof null also produces "object". */

function deepEqual(a, b) {
  if (a === b) { 
    return true;
  } else if ((typeof a && typeof b == "object") && (a && b != null)) { // if both arguments are real objects
    if (Object.keys(a).length == Object.keys(b).length) { // if both objects have same number of properties
      for (var key in a) { // loop through the keys of one object  
        if (key in b) { // if the other object has the key too
            return deepEqual(a[key], b[key]); // compare keys' values
        }
      }
    } 
  } 
  else {
    return false;
  }
}
    
var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj)); // prints true
console.log(deepEqual(obj, {here: 1, object: 2})); // prints false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // prints true
console.log(deepEqual(obj, {here: null, object: 2})); // prints false


// Eloquent JavaScript answer:
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // prints true
console.log(deepEqual(obj, {here: 1, object: 2})); // prints false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // prints true
