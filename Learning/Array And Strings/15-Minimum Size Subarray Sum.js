/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minSize = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      minSize = Math.min(right - left + 1, minSize);

      sum -= nums[left];
      left++;
    }

    right++;
  }

  return minSize === Number.MAX_SAFE_INTEGER ? 0 : minSize;
};
