/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestSubStr = 0;
  for (let i = 0; i < s.length; i++) {
    const subStringSet = new Set();
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (subStringSet.has(char)) {
        break;
      }
      subStringSet.add(char);
      longestSubStr = Math.max(longestSubStr, subStringSet.size);
    }
  }

  return longestSubStr;
};
var lengthOfLongestSubstringOptimized = function (s) {
  const visitedChar = new Set();
  let longest = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    while (visitedChar.has(s[i])) {
      visitedChar.delete(s[l]);
      l++;
    }
    visitedChar.add(s[i]);
    longest = Math.max(longest, i - l + 1);
  }
  return longest;
};

var lengthOfLongestSubstring = function (s) {
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring(" "));
