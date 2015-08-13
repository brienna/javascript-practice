/* 6.1. A vector type.js

Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters 
(numbers), which it should save to properties of the same name.

Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return 
a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x 
and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance 
of the point (x, y) from the origin (0, 0). */

function Vector(x, y) {
  this.x = x;
  this.y = y;
     
  this.plus = function(vctr) {
      sumX = this.x + vctr.x;
    sumY = this.y + vctr.y;
    return new Vector(sumX, sumY);
  };
 
  this.minus = function(vctr) {
    diffX = this.x - vctr.x;
    diffY = this.y - vctr.y;
    return new Vector(diffX, diffY);
  };

  Object.defineProperty(this, 'length', {
    get: function() {
      return Math.sqrt(Math.pow(this.x, 2)+(Math.pow(this.y, 2)));
    },
  });
  
}

console.log(new Vector(1, 2).plus(new Vector(2, 3))); // prints Vector{x: 3, y: 5, plus: function (vctr){…}, …}
console.log(new Vector(1, 2).minus(new Vector(2, 3))); // prints Vector{x: -1, y: -1, plus: function (vctr){…}, …}
console.log(new Vector(3, 4).length); // prints 5


// Eloquent JavaScript answer:
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3))); // prints Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3))); // prints Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length); // prints 5
