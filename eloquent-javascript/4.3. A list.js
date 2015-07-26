/* 4.3. A list

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

Write a function arrayToList that builds up a linked list like the one above when given [1, 2, 3] as an argument,
and write a listToArray function that produces an array from a list. Also write the helper functions prepend, 
which takes an element and a list and creates a new list that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns the element at the given position in the list, or 
undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */

function arrayToList(array) { 
    var list = null; // because end of a linked list is null
    
    for (var i = array.length - 1; i >= 0; i--) { 
        var node = { // creates temporary node to hold the part of the list built so far
            value: array[i], 
            rest: list 
        };
        
        list = node; // temporary node is now the head node of the list
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

function nth(list, n) {
  var index = 0;

  for (var node = list; node; node = node.rest) { 
    if (!list) {
      return undefined;
    } else if (index == n) {
      return node.value;
    }

    index += 1;
  }
}

// recursive version of nth
function r_nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
      return list.value;
  } else {
    return r_nth(list.rest, n - 1); // reduces "tail" of the list, counting down until n reaches zero
  }
}

debug(arrayToList([10, 20, 30])); // prints {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
debug(listToArray(arrayToList([10, 20, 30]))); // prints [10, 20, 30]
debug(prepend(10, prepend(20, null))); // prints {value: 10, rest: {value: 20, rest: null}}
debug(nth(arrayToList([10, 20, 30]), 1)); // prints 20
debug(r_nth(arrayToList([10, 20, 30]), 1)); // prints 20


// Eloquent JavaScript answer:
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
