/* 6.3. Sequence interface

Design an interface that abstracts iteration over a collection of values. An object that provides this interface 
represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate 
over the sequence, looking at the element values it is made up of and having some way to find out when the end of 
the sequence is reached.

When you have specified your interface, try to write a function logFive that takes a sequence object and calls 
console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface 
you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to 
arguments to its constructor) instead. */

// logFive() calls sequence.next() and logs the current element to the console up to 5 times.
function logFive(sequence) {
  for (var i = 0; i < 5; i++) { // for first 5 elements
    if (!sequence.next()) { // (useful when sequence has fewer than 5 elements)
      break;
    }
    console.log(sequence.current()); // otherwise print current element
  }
}

// ArraySeq is an object type for iterating over an array of elements.
function ArraySeq(array) {
  this.array = array; 
  this.index = -1; 
}

// next() increments the index by 1 and returns a boolean indicating whether there are more elements in the array.
ArraySeq.prototype.next = function() {
  this.index++;
  if (this.index >= this.array.length) { // if index >= num of elements
    return false; // return false, no more elements exist in array
  }
  return true; // otherwise return true, more elements exist in array
};

// current() returns the current element in the array.
ArraySeq.prototype.current = function() {
  return this.array[this.index];
};
  
logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8])); // prints 1, 2, 3, 4, 5
logFive(new ArraySeq([1, 8])); // prints 1, 8
