/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map1 = {};
  const map2 = {};
  let left = 0;
  let right = 0;
  let result = Number.MAX_SAFE_INTEGER;
  let subString = [0, 0];

  for (const char of t) {
    map1[char] !== undefined ? map1[char]++ : (map1[char] = 1);
  }

  while (right < s.length) {
    const currentChar = s[right];
    map2[currentChar] !== undefined ? map2[currentChar]++ : (map2[currentChar] = 1);

    while (isMathched(map1, map2)) {
      if (map2[s[left]] >= 1) {
        map2[s[left]]--;
      }

      const windowSize = right - left + 1;
      if (windowSize < result) {
        result = windowSize;
        subString[0] = left;
        subString[1] = right;
      }

      left++;
    }

    right++;
  }

  if (result === Number.MAX_SAFE_INTEGER) return "";

  return s.slice(subString[0], subString[1] + 1);
};

const isMathched = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] === undefined || map2[key] < map1[key]) return false;
  }
  return true;
};

console.log(minWindow((s = "ADOBECODEBANC"), (t = "ABC")));
console.log(minWindow((s = "a"), (t = "a")));
console.log(minWindow((s = "a"), (t = "aa")));
