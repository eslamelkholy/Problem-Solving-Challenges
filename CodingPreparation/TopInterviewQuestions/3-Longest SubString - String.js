/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStr = '';
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let currentSub = s[i];

    for (let j = i + 1; j < s.length; j++) {
      if (currentSub.includes(s[j])) break;
      currentSub += s[j];
    }

    if (maxLength < currentSub.length) maxLength = currentSub.length;
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
