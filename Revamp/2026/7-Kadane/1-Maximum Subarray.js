/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentMax = 0;
  let maxSum = nums[0];

  for (const num of nums) {
    currentMax = Math.max(num, currentMax + num);

    maxSum = Math.max(maxSum, currentMax);
  }

  return maxSum;
};
