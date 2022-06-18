/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const numsMap = { 0: 1 };
  let sum = 0;
  let occuranceCount = 0;

  for (let num of nums) {
    sum += num;
    if (numsMap[sum - k] !== undefined) {
      occuranceCount += numsMap[sum - k];
    }

    if (numsMap[sum] !== undefined) {
      numsMap[sum]++;
    } else {
      numsMap[sum] = 1;
    }
  }
  return occuranceCount;
};
