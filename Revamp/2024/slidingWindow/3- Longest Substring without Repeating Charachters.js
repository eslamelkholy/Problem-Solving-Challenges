/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let longestSubstring = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];

    while (charSet.has(char)) {
      charSet.delete(s[left]);
      left++;
    }

    longestSubstring = Math.max(longestSubstring, right - left + 1);

    charSet.add(char);
    right++;
  }

  return longestSubstring;
};

console.log(lengthOfLongestSubstring((s = "abcabcbb")));
console.log(lengthOfLongestSubstring((s = "pwwkew")));
console.log(lengthOfLongestSubstring((s = "tmmzuxt")));
