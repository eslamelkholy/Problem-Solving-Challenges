/**
 * Given Two Strings And Check If both Is Equals
 * [ Test Cases ]
 * 1- str1: "test1", str2: "test2" // False
 * 2- str1: "elbows", str2: "below" // False
 * 3- str1: "listens", str2: "silent" // False
 * 4- str1: "conversation", str2: "voices rant on"  // True
 * 5- str1: "STATE", str2: "taste" // True
 * 2- str1: "listen", str2: "silent"  // True
 */

const { IRemoveSpecialCharacters } = require("./removeSpecialCharacters");
const { getLetterCount } = require("./LetterCount");
const isAnagram = (str1, str2) => {
  const newStr1 = IRemoveSpecialCharacters(str1);
  const newStr2 = IRemoveSpecialCharacters(str2);
  const letterCount1 = getLetterCount(newStr1);
  const letterCount2 = getLetterCount(newStr2);
  return Object.entries(letterCount1).sort().toString() === Object.entries(letterCount2).sort().toString();
};

console.log(isAnagram("test1", "test2"));
console.log(isAnagram("elbows", "below"));
console.log(isAnagram("conversation", "voices rant on"));
console.log(isAnagram("STATE", "taste"));
