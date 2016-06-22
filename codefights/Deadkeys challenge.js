/*  Deadkeys challenge

Recently the keyboard on my laptop stopped working properly. I don't know why it happened, but some 
keys do nothing when I press them. As you can imagine, this makes programming quite difficult - but 
not impossible! Here's a workaround: I can start typing something, then use the code completion menu 
that appears to choose a word with my desired letter in it and delete all the other letters in the word.

Since CodeFights is all about coding quickly, I want you to write me a program that finds the least 
amount of steps to get my desired letter.

The code completion menu appears after typing the first letter of a word. It will only show words 
beginning with the currently typed string, and shows them in lexicographical order (alphabetically sorted). 
More letters can be typed to reduce the number of words visible in the code completion menu, since it 
updates after each key press.

The output should be the smallest possible number of steps to reach the target character. The number of 
steps is defined as the number of keys pressed plus the number of items visible in the code completion 
menu before the first item containing the desired letter. You do not need to worry about deleting 
characters to leave only the target. It is guaranteed that the target letter is possible to reach.

Example:

keys = "adfs", 
target = "e"
menu = [ "ceil", "data", "do", "done", "sans", "say", "sde", "share" ],
the output should be
DeadKeys(keys, target, menu) = 2

The menu begins with "ceil" as the first word, but this can't be chosen because the menu only opens after 
typing the first letter. The letter c is also not in the list of working keys, so this word is impossible 
to be selected.

e can be found by typing d, which opens the code completion menu with the words "data", "do" and "done" 
in that order. The word "done" contains an e and is the third word, which means there are 2 before it. 
We've typed 1 character so the result is 2 + 1 = 3.

Typing s opens the menu with "sans", "say", "sde", and "share". The first word containing e is "sde", so 
the result for this would be 2 + 1 = 3, but if we type sd instead of just s, the menu would only show "sde", 
making the result 0 + 2 = 2. This is the smallest possible result.

[time limit] 4000ms (js)

[input] string keys -- The list of working keys that can be typed to filter the code completion menu. It will 
only contain lower-case English letters a-z and is sorted alphabetically. It will never contain duplicates or 
the target letter. 

  Constraints: 
    1 ≤ keys.length ≤ 25

[input] char target -- The desired letter. It will always be a lower-case English letter a-z, which is not 
present in keys.

[input] array.string menu -- The list of words in the code completion menu. The strings in it will only contain 
lower-case English letters a-z. The list is sorted lexicographically.

  Constraints: 
    1 ≤ menu.length ≤ 50
    1 ≤ menu[i].length ≤ 50.

[output] integer -- The minimum number of steps to reach the target letter.  */ 

function DeadKeys(keys, target, menu) {
    // Categorize words by first letter if included in keys
    var groups = {};
    for (var word = 0; word < menu.length; word++) {
    	// If word begins with a key
    	firstLetter = menu[word].charAt(0);
    	if (keys.indexOf(firstLetter) != -1) {
    		// If groups dict doesn't contain key
    		if (!groups[firstLetter]) {
    			groups[firstLetter] = [];
    		}
    		// Add word to key group in dict
    		groups[firstLetter].push(menu[word]);
    		
    		// If word's second letter also begins with a key
    		secondLetter = menu[word].charAt(1);
    		if (keys.indexOf(secondLetter) != -1) {
    			// If groups dict doesn't contain keys
    			if (!groups[firstLetter + secondLetter]) {
    				groups[firstLetter + secondLetter] = [];
    			}
    			// Add word to keys group in dict
    			groups[firstLetter + secondLetter].push(menu[word]);
    		}
    	}
    }
    console.log(groups);
    
    var steps = 100;  // set to some random high number
    var stepsTemp = 1;
    // Loop through dict
    for (var group in groups) {
    	// Loop through each group
    	for (word = 0; word < groups[group].length; word++) {
    		// Break at the first word containing target key
    		if (groups[group][word].indexOf(target) != -1) {
    			console.log(groups[group][word]);
    			// Update steps
    			if (stepsTemp < steps) {
    				steps = stepsTemp;
    			}
    			break;
    		}
    		// Add a step for each word before the break
    		stepsTemp++;
    	}
    	// Reset temporary steps
    	stepsTemp = 1;
    }
    return steps;
}

menu = ["ceil", 
 "data", 
 "do", 
 "done", 
 "sans", 
 "say", 
 "sde", 
 "share"]
keys = "adfs";
target = "e";
DeadKeys(keys, target, menu);

