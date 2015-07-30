/* 2.3. Chess board

Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chess 
board. Passing this string to console.log should show something like this: 

 # # # #
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 

When you have a program that generates this pattern, define a variable size = 8 and change the program 
so that it works for any size, outputting a grid of the given width and height.
*/

var board = "";
var size = 8;

for (var row = 0; row < size; row++) {
	for (var column = 0; column < size; column++) {
		if ((row + column) % 2 === 0) 
			board += " ";	
		else 
			board += "#";
	}
	
	board += "\n";
}

debug(board);

// Eloquent JavaScript answer:
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);



