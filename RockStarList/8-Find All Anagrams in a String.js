/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const charMap = {};
  const currentCharMap = {};
  for (const char of p) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }
  let result = [];
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];
    currentCharMap[char] ? currentCharMap[char]++ : (currentCharMap[char] = 1);

    if (isAnagram(charMap, currentCharMap)) {
      result.push(left);
    }

    const currentWindowLength = right - left + 1;
    if (currentWindowLength === p.length) {
      if (currentCharMap[s[left]]) currentCharMap[s[left]]--;
      left++;
    }

    right++;
  }
  return result;
};

/**
 * @param {Map} map1
 * @param {Map} map2
 * @returns {boolean}
 */
const isAnagram = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] === undefined || map2[key] !== map1[key]) return false;
  }
  return true;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
