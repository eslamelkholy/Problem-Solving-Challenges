/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
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

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
