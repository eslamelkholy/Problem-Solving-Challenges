/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const numFreq = {};
  const uniqueSet = new Set();

  for (const num of arr) {
    numFreq[num] === undefined ? (numFreq[num] = 1) : numFreq[num]++;
  }

  for (const key in numFreq) {
    if (uniqueSet.has(numFreq[key])) return false;

    uniqueSet.add(numFreq[key]);
  }

  return true;
};
