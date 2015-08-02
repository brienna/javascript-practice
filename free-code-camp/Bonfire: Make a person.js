// Bonfire: Make a person

// Fill in the object constructor with the methods specified in the tests.

// Given code:
var Person = function(firstAndLast) {
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();


// My solution: 
var Person = function(firstAndLast) {
    var person = {
        getFullName: function() {
            return firstAndLast;
        }
    };

    return person;
};

var bob = new Person('Bob Ross');
var fullName = bob.getFullName();
debug(fullName);
