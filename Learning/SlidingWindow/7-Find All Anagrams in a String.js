/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const strMap = {};
  let right = 0;
  let left = 0;
  let currentStrMap = {};
  let result = [];

  for (const char of p) {
    strMap[char] ? strMap[char]++ : (strMap[char] = 1);
  }

  while (right < s.length) {
    const char = s[right];
    if (strMap[char]) {
      currentStrMap[char] ? currentStrMap[char]++ : (currentStrMap[char] = 1);
    }

    if (compareFrequency(strMap, currentStrMap)) {
      result.push(left);
    }

    if (right - left + 1 === p.length) {
      if (currentStrMap[s[left]]) currentStrMap[s[left]]--;
      left++;
    }

    right++;
  }

  return result;
};

/**
 * @param {object} map1
 * @param {object} map2
 * @returns {boolean}
 */
const compareFrequency = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] !== map1[key] || map2[key] === undefined) return false;
  }
  return true;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
