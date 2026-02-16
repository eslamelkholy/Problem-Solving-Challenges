/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let currentWindowSum = 0;
  let minLen = nums.length + 1;

  while (right < nums.length) {
    const num = nums[right];
    currentWindowSum += num;

    while (currentWindowSum >= target) {
      minLen = Math.min(minLen, right - left + 1);

      currentWindowSum -= nums[left];
      left++;
    }

    right++;
  }

  return minLen === nums.length + 1 ? 0 : minLen;
};
