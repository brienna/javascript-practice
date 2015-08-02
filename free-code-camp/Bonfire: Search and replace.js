// Bonfire: Search and replace

// Perform a search and replace on the sentence using the arguments
// provided and return the new sentence. 

// Given code: 
function replace(str, before, after) {
 return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// My solution:
function replace(str, before, after) {
    var words = str.split(" "); // splits string into array of words

    var replaced = words.map(function(word) {
        if (word == before) {
            return after;
        } else {
            return word;
        } 
    });

    debug(replaced.join(" ")); // prints "A quick brown fox leaped over the lazy dog"
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
