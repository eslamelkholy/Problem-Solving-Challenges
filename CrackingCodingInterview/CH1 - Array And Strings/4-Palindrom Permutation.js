/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const charMap = {};
  let occuranceCount = 0;

  for (const char of s) {
    charMap[char]++ || (charMap[char] = 1);
  }

  for (const key in charMap) {
    if (charMap[key] % 2 !== 0) {
      occuranceCount++;
    }

    if (occuranceCount > 1) return false;
  }

  return true;
};

// https://leetcode.com/problems/palindrome-permutation/
