/* 9.1. RegExp golf.js

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. 
The regular expression should match only strings containing one of the substrings described. Do not worry about word 
boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller. */

/ca[rt]/ // 1. car and cat 
/pr?op/ // 2. pop and prop
/ferr(et|y|ari)/ // 3. ferret, ferry, and ferrari
/ious\b/ // 4. Any word ending in ious
/\s[.,:;]/ // 5. A whitespace character followed by a dot, comma, colon, or semicolon
/\w{7}/ // 6. A word longer than six letters
/\b[a-df-z]+\b/ // 7. A word without the letter e

// Eloquent JavaScript answer is identical to mine.




