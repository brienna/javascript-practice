// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

var str = "#";

for (var i = 0; i < 7; i++) {
	debug(str);
	str += "#";
}

// Eloquent JavaScript answer: 
for (var line = "#"; line.length < 8; line += "#")
  debug(line);
