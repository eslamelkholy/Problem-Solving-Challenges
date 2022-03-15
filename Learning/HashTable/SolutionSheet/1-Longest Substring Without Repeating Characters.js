/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestStrLength = 0;

  for (let i = 0; i < s.length; i++) {
    const subStrSet = new Set();
    let subStr = '';
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (subStrSet.has(char)) {
        break;
      }
      subStr += char;
      subStrSet.add(char);
      longestStrLength = Math.max(longestStrLength, subStr.length);
    }
  }
  return longestStrLength;
};

var lengthOfLongestSubstring = function (s) {
  let start = 0,
    max = 0,
    map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map = {};
      start++;
      i = start;
    }

    map[s[i]] = true;
    max = Math.max(max, i - start + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring(' ')); // 3
