/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  let minWindow = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minWindow = Math.min(minWindow, right - left + 1);
      currentSum -= nums[left];
      left++;
    }

    right++;
  }

  return minWindow === Number.MAX_SAFE_INTEGER ? 0 : minWindow;
};

console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen(11, [(1, 2, 3, 4, 5)]));
