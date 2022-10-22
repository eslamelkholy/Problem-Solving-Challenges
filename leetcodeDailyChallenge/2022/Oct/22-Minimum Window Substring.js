/**
 * @param {string} inputString
 * @param {string} characters
 * @return {string}
 */
var minWindow = function (inputString, characters) {
  let left = 0;
  let right = 0;
  let minimumSubString = inputString;
  const currentWindowMap = {};
  const charsMap = {};

  for (const char of characters) {
    charsMap[char] ? charsMap[char]++ : (charsMap[char] = 1);
  }

  while (right < inputString.length) {
    const char = inputString[right];
    currentWindowMap[char] ? currentWindowMap[char]++ : (currentWindowMap[char] = 1);

    while (compareFrequency(charsMap, currentWindowMap)) {
      const currentWindowLength = right - left + 1;
      if (currentWindowLength < minimumSubString.length) {
        minimumSubString = inputString.slice(left, right + 1);
      }

      if (currentWindowMap[inputString[left]]) currentWindowMap[inputString[left]]--;
      left++;
    }

    right++;
  }

  return left === 0 ? "" : minimumSubString;
};

/**
 * @param {object} map1
 * @param {object} map2
 * @returns {boolean}
 */
const compareFrequency = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] < map1[key] || map2[key] === undefined) return false;
  }

  return true;
};
