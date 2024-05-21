/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minSize = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minSize = Math.min(minSize, right - left + 1);

      currentSum -= nums[left];
      left++;
    }
    right++;
  }

  return minSize === Number.MAX_SAFE_INTEGER ? 0 : minSize;
};
