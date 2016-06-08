/*  Unary function chainer

Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input) should yield the same result as d(c(b(a(input))))  */

function chained(functions) {
  function execute(input) {
  	// Call each function with the result of the previous function call
    for (var f = 0; f < functions.length; f++) {
      input = functions[f](input);
    }
    return input;
  }
  // Return the function so it can be called like execute(input), 
  // which, in this specific code, is execute(0) and execute("lorem ipsum")
  return execute;
}

// Execution example 1
function a(x) { return x*2 }
function b(x) { return x+2 }
function c(x) { return Math.pow(x,2) }
console.log(chained([a,b,c])(0));  // prints 4 

// Execution example 2
function d(x){ return x.split("").concat().reverse().join("").split(" ")}
function e(xs){ return xs.concat().reverse() }
function f(xs){ return xs.join("_") }
console.log(chained([d,e,f])("lorem ipsum"));  // prints "merol_muspi"
