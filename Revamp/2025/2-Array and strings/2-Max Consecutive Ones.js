/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentWindow = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) currentWindow++;

    if (nums[i] === 0) currentWindow = 0;

    max = Math.max(max, currentWindow);
  }

  return max;
};
