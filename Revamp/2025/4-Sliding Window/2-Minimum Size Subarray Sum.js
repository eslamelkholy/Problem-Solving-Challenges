/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      min = Math.min(min, right - left + 1);
      currentSum -= nums[left];
      left++;
    }

    right++;
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
