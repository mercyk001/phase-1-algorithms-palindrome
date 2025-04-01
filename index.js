function isPalindrome(word) {
  // Write your algorithm here  our function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.
 if (word === word.split('').reverse().join('')) {
   return true;
 } else{
  return false;
 }
}

/* 
  Add your pseudocode here
  define functio called isPalindrome that takes in a string called word
  reverse the string word
  compare with the original string word
  return true if equal, else false.
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  //added

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
