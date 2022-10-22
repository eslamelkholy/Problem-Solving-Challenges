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

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let charMap = {};
  let left = 0;
  let right = -1;
  let current = "";

  for (const char of t) {
    charMap[char] !== undefined ? charMap[char]++ : (charMap[char] = 1);
  }
  let totalCount = Object.keys(charMap).length;

  while (right <= s.length) {
    if (totalCount === 0) {
      let currentChar = s[left];

      if (charMap[currentChar] !== undefined) charMap[currentChar]++;

      if (charMap[currentChar] > 0) totalCount++;

      let temp = s.substring(left, right + 1);
      if (current === "") {
        current = temp;
      } else {
        current = current.length < temp.length ? current : temp;
      }

      left++;
    } else {
      right++;
      let currentChar = s[right];

      if (charMap[currentChar] !== undefined) charMap[currentChar]--;

      if (charMap[currentChar] === 0) totalCount--;
    }
  }

  return current;
};
