/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freqMap = {};
  let result = "";

  for (const char of s) {
    freqMap[char] === undefined ? (freqMap[char] = 1) : freqMap[char]++;
  }

  const sortedElements = Object.keys(freqMap).sort((a, b) => freqMap[a] - freqMap[b]);

  for (let i = sortedElements.length - 1; i >= 0; i--) {
    const num = sortedElements[i];
    result += num.repeat(freqMap[num]);
  }
  return result;
};

// Object acts like a Priority Queue
