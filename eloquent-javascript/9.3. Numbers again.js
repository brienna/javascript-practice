/* 9.3. Numbers again

A series of digits can be matched by the simple regular expression /\d+/.

Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in 
front of the number, the decimal dot, and exponent notation—5e-3 or 1E10— again with an optional sign in front of 
the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the 
number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t. 

Hints: First, do not forget the backslash in front of the dot.

The more complicated part of the exercise is the problem of matching both "5." and ".5" without also matching ".". 
For this, a good solution is to use the | operator to separate the two cases—either one or more digits optionally 
followed by a dot and zero or more digits or a dot followed by one or more digits. */

var number = /^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/;

// Eloquent JavaScript answer:
var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});

["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
