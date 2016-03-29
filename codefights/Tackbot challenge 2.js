/* Tackbot challenge 2

Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack, 
a Pro specifies which categories of services they provide. To help match customer requests with qualified Pros, 
Thumbtack maintains a list of Pros grouped by service categories.

Given a list of pros and their category preferences, return the list of Pros for each category.

Example:

For pros = ["Jack", "Leon", "Maria"] and

preferences = [["Computer repair", "Handyman", "House cleaning"],
               ["Computer lessons", "Computer repair", "Data recovery service"],
               ["Computer lessons", "House cleaning"]]
               
the output should be

proCategorization(pros, preferences) = [[["Computer lessons"], ["Leon", "Maria"]],
                                        [["Computer repair"], ["Jack", "Leon"]],
                                        [["Data recovery service"], ["Leon"]],
                                        [["Handyman"], ["Jack"]],
                                        [["House cleaning"], ["Jack", "Maria"]]]
                                        
[input] array.string pros -- A sorted non-empty array of unique strings consisting of English letters. 
Here and below we assume that strings are sorted lexicographically.

[input] array.array.string preferences -- Array of the same length as pros. For each valid i preferences[i] 
is a sorted array of unique elements, representing the categories the ith Pro provides services in.

[output] array.array.array.string -- Array of category descriptions sorted by category names. Each category 
should be listed in the following format: [[<category>], [<Pro1>, <Pro2>...]] where <category> is a category 
name, and <Proi> is a Pro that provides services in it.

Each category present in preferences should be returned, and Pros in each subarray should be sorted. */

var pros = ["Jack", "Leon", "Maria"];

var preferences = [["Computer repair", "Handyman", "House cleaning"],
               ["Computer lessons", "Computer repair", "Data recovery service"],
               ["Computer lessons", "House cleaning"]];

function proCategorization(pros, preferences) {
	// create an array w/ unique services
	var services = [];
	preferences.forEach(function(pro) {
		pro.forEach(function(pref) {
			if (services.indexOf(pref) == -1) {  
				services.push(pref);
			}
		});
	});
	services.sort();  
	
	// turn the array into a 3D array
	services.forEach(function(service, i) {
		services[i] = [[service]];
	});
	
	// match pros to service
	services.forEach(function(arr, i) {  
		var p = [];
		preferences.forEach(function(pro, j) { 
			pro.forEach(function(pref) {  
				if (services[i] == pref) {  
					p.push(pros[j]);
				}
			});
		});
		services[i].push(p);
	});
	
	return services;
}

console.log(proCategorization(pros, preferences));
