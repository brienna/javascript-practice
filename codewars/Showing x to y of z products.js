/* Showing x to y of z products.js

A category page displays a set number of products per page, with pagination at the 
bottom allowing the user to move from page to page. 

Given that you know the page you are on, how many products are in the category in total, 
and how many products are on any given page, how would you output a simple string showing 
which products you are viewing..

Examples:

In a category of 30 products with 10 products per page, on page 1 you would see

'Showing 1 to 10 of 30 Products.'

In a category of 26 products with 10 products per page, on page 3 you would see

'Showing 21 to 26 of 26 Products.'

In a category of 8 products with 10 products per page, on page 1 you would see

'Showing 1 to 8 of 8 Products.' */

var paginationText = function(pageNumber, pageSize, totalProducts){
  var x, y, w;
  
  w = pageSize * (pageNumber - 1);
  x = w + 1;
  
  if (totalProducts < (w + pageSize)) {
      y = totalProducts;
  } else {
      y = w + pageSize;
  }
  
  return 'Showing ' + x + ' to ' + y + ' of ' + totalProducts + ' Products.';
};

// Showing 1 to 10 of 30 products
console.log(paginationText(1, 10, 30));
// Showing 21 to 26 of 26 products
console.log(paginationText(3, 10, 26));
// Showing 1 to 8 of 8 products
console.log(paginationText(1, 10, 8));
