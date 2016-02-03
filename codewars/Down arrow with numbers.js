/* Down arrow with numbers

Given a number n, make a down arrow shaped pattern.

For example, when n = 5, the output would be:

123454321
 1234321
  12321
   121
    1
    
    */

function getADownArrowOf(n) {
  var line = '';
  while (n) {
      for (i = 1; i <= n; i ++) {
        line += i;
      }
      for (i = n-1; i > 0; i--) {
        line += i;
      }
      console.log(line);
      line = ''
      n = n - 1
  }
}

getADownArrowOf(5)
