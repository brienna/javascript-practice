// Bonfire: Find the longest word in a string. 

function findLongestWord(str) {												

	str = str.split(" "); // split string into individual words, or array elements
	var wordLength = 0;
	var longestWord = null;											

	for (var i = 0; i < str.length; i++) { // loop through each word in the array
		if (str[i].length > wordLength) { // if length of current word is longer than most recent wordLength,
			wordLength = str[i].length; // set wordLength to equal length of current word
			longestWord = str[i]; // set longestWord to current word
		}
 	}

	debug(longestWord);
 	return longestWord;											
 	
 }

findLongestWord("The quick brown fox jumped over the lazy dog.");
