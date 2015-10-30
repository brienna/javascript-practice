/* Length of the line segment

Find the length between 2 co-ordinates. The co-ordinates are made of integers between -20 
and 20 and will be given in the form of a 2D array: (0,0) and (5,-7) would be [[0,0],[5,-7]]

The function must return the answer rounded to 2 decimal places in the form of a string:
lengthOfLine([[0,0],[5,-7]]); => "8.60"

If the 2 given co-ordinates are the same, the returned length should be "0.00" */

function lengthOfLine(array){
  var y2 = Math.pow(array[1][1] - array[0][1], 2);
  var x2 = Math.pow(array[1][0] - array[0][0], 2);
  var length = Math.sqrt(x2 + y2);
  return length.toFixed(2);
}
