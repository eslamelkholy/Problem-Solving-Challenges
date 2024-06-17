/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const freqMap = {};
  let result = "";
  let prevChar = chars[0];
  let currentCount = 1;

  for (let i = 1; i < chars.length; i++) {
    const currentChar = chars[i];

    if (currentChar === prevChar) {
      currentCount++;
    }

    if (currentChar !== prevChar || i === chars.length - 1) {
      result += prevChar + currentCount;
      prevChar = currentChar;
      currentCount = 1;
    }
  }

  console.log(result);
};

console.log(compress((chars = ["a", "a", "b", "b", "c", "c", "c"])));
console.log(compress((chars = ["a", "a", "b", "c", "c", "c", "c", "c", "a", "a", "a"])));

// https://leetcode.com/problems/string-compression/description/
