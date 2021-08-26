/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numsMap = {};
  const result = [];
  const freqArr = [];
  for (const num of nums) numsMap[num] ? numsMap[num]++ : (numsMap[num] = 1);

  for (const key in numsMap) freqArr.push({ freq: numsMap[key], val: key });

  freqArr.sort((a, b) => b.freq - a.freq);
  for (let i = 1; i < k + 1; i++) result.push(parseInt(freqArr[i - 1].val));

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
