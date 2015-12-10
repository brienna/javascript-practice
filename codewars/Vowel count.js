// Return the number (count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this Kata. 

function getCount(str) {
  var vowelsCount = 0;
  var letters = str.split("");
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  var letter, vowel;
  for (letter in letters) {
      for (vowel in vowels) {
          if (letters[letter] == vowels[vowel]) {
              vowelsCount++;
          }
      }
  }
  
  return vowelsCount;
}


// An alternative solution:

function getCount(str) {
  return str.match(/[aeiou]/g).length;
}
