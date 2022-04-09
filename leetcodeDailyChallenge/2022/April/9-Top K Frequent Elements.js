/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = {};
  const result = [];

  for (const num of nums) {
    freqMap[num] ? freqMap[num]++ : (freqMap[num] = 1);
  }
  const freqArr = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(parseInt(freqArr[i][0]));
  }

  return result;
};

// console.log(topKFrequent([2, 2, 5, 3, 1, 1, 1], 2));
// console.log(topKFrequent([1], 1));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
