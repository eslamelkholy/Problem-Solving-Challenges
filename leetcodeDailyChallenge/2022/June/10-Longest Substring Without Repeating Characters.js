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

var lengthOfLongestSubstringC = function (s) {
  let charSet = new Set();
  let longestLength = 0;
  let left = 0; // 1- Left Pointer
  let right = 0; // 2- Right Pointer

  while (right < s.length) {
    const char = s[right]; // 3- Current Character we Have

    while (charSet.has(char)) {
      // 4- If the character already Exists in Current Window Loop Till we Remove Duplication
      charSet.delete(s[left]);

      left++;
    }
    charSet.add(char);

    // 5- Compare Current Window Length and Set the Maximum Length
    longestLength = Math.max(longestLength, charSet.size);

    right++; // 6- Increase the Length of the Window of Each Iterate
  }

  return longestLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
