function isPalindrome(word) {
  // Write your algorithm here
  let wordArray = [...word];
  let newWordArray = [];
  console.log(wordArray);
  for (let i = word.length - 1; i >= 0; i--) {
    newWordArray.push(word[i]);
  }
  let joinedNweWordArray = newWordArray.join("");
  if (joinedNweWordArray === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
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
}

module.exports = isPalindrome;
