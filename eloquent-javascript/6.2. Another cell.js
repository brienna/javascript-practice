/* 6.2. Another cell.js

Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier 
in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least 
the given width and height, even if the inner cell would naturally be smaller. 

Hints: You’ll have to store all three constructor arguments in the instance object. The minWidth and minHeight methods 
should call through to the corresponding methods in the inner cell but ensure that no number less than the given size 
is returned (possibly using Math.max).

Don’t forget to add a draw method that simply forwards the call to the inner cell. */

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight()); 
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth()); // prints 3
console.log(sc.minHeight()); // prints 2
console.log(sc.draw(3, 2)); // prints ["abc", "   "]


// Eloquent JavaScript answer:
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth()); // prints 3
console.log(sc.minHeight()); // prints 2
console.log(sc.draw(3, 2)); // prints ["abc", "   "]
