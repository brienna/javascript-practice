/*
Write a function countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it 
takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make 
use of this new function.
*/

var countBs = function(str) {
	return countChar(str, "B");
};

var countChar = function(str, charToBeCounted) {
	var total = 0;
	
	for (var i = 0; i < str.length; i++)
		if (str.charAt(i) == charToBeCounted) 
			total += 1;
	return total;
};

debug(countBs("BBC"));
debug(countChar("kakkerlak", "k"));

// Eloquent JavaScript answer:
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
