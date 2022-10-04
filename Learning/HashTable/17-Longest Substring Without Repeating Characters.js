/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const subStrMap = {};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let currentSub = s[i];
    for (let j = i + 1; j < s.length; j++) currentSub.includes(s[j]) ? (j = s.length) : (currentSub += s[j]);

    subStrMap[currentSub] = currentSub.length;
    if (currentSub.length > result) result = currentSub.length;
    currentSub = "";
  }

  return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let left = 0;
  let right = 0;
  let maxSubLength = 0;

  while (right < s.length) {
    const char = s[right];

    while (charSet.has(char)) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(char);
    maxSubLength = Math.max(charSet.size, maxSubLength);
    right++;
  }

  return maxSubLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));
