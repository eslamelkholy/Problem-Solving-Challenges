/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let maxPairSum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    maxPairSum += nums[i];
  }

  return maxPairSum;
};
