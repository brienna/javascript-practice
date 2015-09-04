// Bonfire: Titlecase a sentence

// Return a string with the first letter of each word capitalized.

function titleCase(str) {
  str = str.split(" "); // split string into individual words, or array elements

  for (var i = 0; i < str.length; i++) { // loop through each word in the array
  	if (str[i].charAt(0) !== str[i].charAt(0).toUpperCase()) { // if first letter of current word is not equal to itself capitalized, 
  		str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1); // set current word to its first letter capitalized + rest of it
  	} 			
  }

  str = str.join(" "); // join all words back into a string
  debug(str);
  return(str);

}

titleCase("I'm a little tea pot");



