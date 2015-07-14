/* 
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function arrayToList that builds up a linked list like the one above when given [1, 2, 3] as argument, 
and write a listToArray function that produces an array from a list. Also write the helper functions prepend, 
which takes an element and a list and creates a new list that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns the element at the given position in the list, or 
undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array) {
    var list = null; // 
    
    for (var i = array.length - 1; i >= 0; i--) { // iterates over array backward
        var node = { // temporary node
            value: array[i],
            rest: list
        };
        
        list = node; 
    }
    
    return list;
}

function listToArray(list) {
    var array = [];
    
    for (var node = list; node; node = node.rest) { 
        array.push(node.value);
    }
    
    return array;
}

function prepend(element, list) {
    var newList = {
        value: element,
        rest: list
    };
    
    return newList;
}

console.log(arrayToList([10, 20, 30])); // prints {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
console.log(listToArray(arrayToList([10, 20, 30]))); // prints [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // prints {value: 10, rest: {value: 20, rest: null}}

// NOTE: Still need to write the helper function nth. 
