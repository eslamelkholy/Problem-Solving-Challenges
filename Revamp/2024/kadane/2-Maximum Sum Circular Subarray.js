/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let currentMax = 0;
  let currentMin = 0;
  let totalSum = 0;

  let maxSum = nums[0];
  let minSum = nums[0];

  for (const num of nums) {
    currentMax = Math.max(currentMax, 0) + num;
    maxSum = Math.max(maxSum, currentMax);

    currentMin = Math.min(0, currentMin) + num;
    minSum = Math.min(minSum, currentMin);

    totalSum += num;
  }

  if (totalSum === minSum) {
    return maxSum;
  }

  return Math.max(maxSum, totalSum - minSum);
};
