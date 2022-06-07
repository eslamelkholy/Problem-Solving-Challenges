/**
 * @param {string} inputString
 * @param {string} characters
 * @return {string}
 */
var minWindow = function (inputString, characters) {
  const charMap = {};
  const inputMap = {};
  for (const char of characters) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  let left = 0;
  let right = 0;
  let currentWindow = [];
  let minSubStringLength = Number.MAX_SAFE_INTEGER;

  while (right < inputString.length) {
    const inputChar = inputString[right];
    if (charMap[inputChar] === undefined) {
      right++;
      continue;
    }

    inputMap[inputChar] ? inputMap[inputChar]++ : (inputMap[inputChar] = 1);

    while (compareMapFrequency(charMap, inputMap)) {
      if (inputMap[inputString[left]]) inputMap[inputString[left]]--;

      const currentWindowLength = right - left;
      if (currentWindowLength < minSubStringLength) {
        minSubStringLength = currentWindowLength;
        currentWindow = [left, right];
      }
      left++;
    }

    right++;
  }

  return inputString.slice(currentWindow[0], currentWindow[1] + 1);
};

/**
 *
 * @param {Map} map1
 * @param {Map} map2
 * @returns {boolean}
 */
const compareMapFrequency = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] === undefined || map2[key] < map1[key]) return false;
  }

  return true;
};

// console.log(compareMapFrequency({ A: 1, B: 1, C: 1 }, { A: 1, B: 1, C: 1 }));

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));

console.log(minWindow('cabwefgewcwaefgcf', 'cae'));
