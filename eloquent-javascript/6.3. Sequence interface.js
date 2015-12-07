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

// RangeSeq is an object type for iterating over a range of integers.
function RangeSeq(start, end) {
  this.currentInt = start - 1;
  this.to = end;
}
  
// next() increments current num by 1 and returns a boolean indicating whether there are more integers in range
RangeSeq.prototype.next = function() {
  this.currentInt++;
  if (this.currentInt >= this.end) { // if current number >= last number
    return false; // return false, no more integers exist in range
  }
  return true; // otherwise return true, more integers exist in range
};

// current() returns the current integer in the range.
RangeSeq.prototype.current = function() {
  return this.currentInt;
};
  
logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8])); // prints 1, 2, 3, 4, 5
logFive(new ArraySeq([1, 8])); // prints 1, 8
logFive(new RangeSeq(100, 1000)); // prints 100, 101, 102, 103, 104


/// Eloquent JavaScript answer:
function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new ArraySeq([1, 2])); // prints 1, 2
logFive(new RangeSeq(100, 1000)); // prints 100, 101, 102, 103, 104

// This alternative approach represents the empty sequence as null,
// and gives non-empty sequences two methods:
//
// * head() returns the element at the start of the sequence.
// 
// * rest() returns the rest of the sequence, or null if there are no
//   elemements left.
//
// Because a JavaScript constructor can not return null, we add a make
// function to constructors of this type of sequence, which constructs
// a sequence, or returns null if the resulting sequence would be
// empty.

function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence !== null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}

function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
  if (offset === null) offset = 0;
  if (offset >= array.length)
    return null;
  else
    return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function() {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
  return this.from;
};
RangeSeq2.make = function(from, to) {
  if (from > to)
    return null;
  else
    return new RangeSeq2(from, to);
};

logFive2(ArraySeq2.make([1, 2])); // prints 1, 2
logFive2(RangeSeq2.make(100, 1000)); // prints 100, 101, 102, 103, 104
