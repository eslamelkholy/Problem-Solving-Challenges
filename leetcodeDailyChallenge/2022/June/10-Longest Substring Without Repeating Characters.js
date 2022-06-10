/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();
  let longestLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];

    while (charSet.has(char)) {
      charSet.delete(s[left]);

      left++;
    }
    charSet.add(char);

    longestLength = Math.max(longestLength, charSet.size);

    right++;
  }

  return longestLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
