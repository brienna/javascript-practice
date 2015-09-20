// Bonfire: Everything be true

// Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
// For this, check to see if the property defined in the second argument is present on every element of the collection.

// Given code: 
function every(collection, pre) {
  // Does everyone have one of these?
  return pre;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');


// My solution:
function every(collection, pre) {
    for (var i = 0; i < collection.length; i++) {
        for (var key in collection[i]) {
            if (pre == key || pre == collection[i][key])
                return true;
        }
    }
    return false;
}

console.log(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex'));
console.log(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'female'}));

