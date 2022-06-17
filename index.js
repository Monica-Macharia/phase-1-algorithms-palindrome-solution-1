function isPalindrome(word) {
  const transformString = word.split('').reverse().join('');
  return word === transformString;
}

/* 
  "abc" turned to an array ["a","b","c"],
  ["a","b","c"] reversed into ["c","b","a"]
  ["c","b","a"] joined back to a string "cba",
  if "cba" === "abc" return true else false
*/

/*
  The function should return true if a word is a palindrome and false if not.
  "abc" return false
  "dad" return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dog"));
}

module.exports = isPalindrome;
