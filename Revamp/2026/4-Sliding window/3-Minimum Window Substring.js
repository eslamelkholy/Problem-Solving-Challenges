/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const subMap = {};
  const currentMap = {};
  let right = 0;
  let left = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let result = '';

  for (const char of t) {
    if (subMap[char] === undefined) {
      subMap[char] = 1;
    } else {
      subMap[char]++;
    }
  }

  while (right < s.length) {
    const char = s[right];
    if (currentMap[char] === undefined) {
      currentMap[char] = 1;
    } else {
      currentMap[char]++;
    }

    while (isSubString(subMap, currentMap)) {
      currentWindowSize = right - left + 1;
      if (currentWindowSize < min) {
        result = s.slice(left, right + 1);
        min = currentWindowSize;
      }

      currentMap[s[left]]--;
      left++;
    }

    right++;
  }

  return result;
};

const isSubString = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] === undefined || map2[key] < map1[key]) return false;
  }

  return true;
};
