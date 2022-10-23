/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const freqMap = {};
  let missing = 1;
  let duplicated = 1;

  for (const num of nums) {
    freqMap[num] !== undefined ? freqMap[num]++ : (freqMap[num] = 1);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (freqMap[i] !== undefined && freqMap[i] === 2) {
      duplicated = i;
    }

    if (freqMap[i] === undefined) missing = i;
  }

  return [duplicated, missing];
};
