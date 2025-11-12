/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);

      currentSum -= nums[left];
      left++;
    }
    right++;
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};
