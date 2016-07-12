/*  Delete occurrences of an element if it occurs more than n times

Details:
Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the 
places they've been, and now they want to show Charlie their entire collection. 
However, Charlie doesn't like this sessions, since the motive usually repeats. 
He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will 
only sit during the session if they show the same motive at most N times. 
Luckily, Alice and Bob are able to encode the motive as a number. Can you help 
them to remove numbers such that their list contains each number only up to N 
times, without changing the order?

Given a list lst and a number N, create a new list that contains each number 
of lst at most N times without reordering. For example if N = 2, and the input 
is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this 
would lead to 1 and 2 being in the result 3 times, and then take 3, which leads 
to [1,2,3,1,2,3].  */


function deleteNth(lst, n){
  var trackers = {};
  
  var output = lst.filter(function(num) {
  	if (!trackers[num]) {
  		// Set a tracker for the number
  		trackers[num] = 1;
  		// Keep the number in the list
  		return true;
  	} else {
  		// Increase count
  		trackers[num]++;
  		// Check if count exceeds max
  		if (trackers[num] > n) {
  			// Remove the number from the list
  			return false;
  		} else {
  			// Keep the number in the list
  			return true;
  		}
  	}
  });
  
  return output;
}

console.log(deleteNth ([1,1,1,1],2)); // returns [1,1]
console.log(deleteNth ([20,37,20,21],1)); // returns [20,37,21]
