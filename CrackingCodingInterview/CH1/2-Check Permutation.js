/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0;
  let right = 0;
  const map1 = {};
  const map2 = {};
  for (const char of s1) {
    map1[char]++ || (map1[char] = 1);
  }

  while (right < s2.length) {
    const char = s2[right];
    map2[char]++ || (map2[char] = 1);

    while (compareFreq(map1, map2)) {
      const size = right - left + 1;
      if (size === s1.length) return true;

      map2[s2[left]]--;
      left++;
    }

    right++;
  }

  return false;
};

const compareFreq = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] === undefined || map2[key] < map1[key]) return false;
  }

  return true;
};

console.log(checkInclusion((s1 = "ab"), (s2 = "eidbaooo")));

// Leetcode reference: https://leetcode.com/problems/permutation-in-string/description/
