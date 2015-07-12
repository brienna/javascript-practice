/*
We’ve seen that % (the remainder operator) can be used to test whether 
a number is even or odd by using % 2 to check whether it’s divisible 
by two. Here’s another way to define whether a positive whole number 
is even or odd:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? 
Can you think of a way to fix this?
*/

function isEven(number) {
  if (number === 0)
    return true;
  else if (number == 1)
    return false;
  else if (number < 0)
    return isEven(-number);  
  else 
    return isEven(number - 2);
}

// Eloquent JavaScript answer: 
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
