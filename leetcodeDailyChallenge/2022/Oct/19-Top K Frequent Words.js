/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let freqMap = {};
  let maxFreq = 0;
  const result = [];

  for (const word of words) {
    freqMap[word] === undefined ? (freqMap[word] = 1) : freqMap[word]++;
  }

  const sortedByFreq = Object.keys(freqMap).sort((a, b) => {
    const compare = freqMap[b] - freqMap[a];
    return compare === 0 ? a.localeCompare(b) : compare;
  });

  for (let i = 0; i < k; i++) {
    result.push(sortedByFreq[i]);
  }

  return result;
};
