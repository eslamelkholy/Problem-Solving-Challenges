/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let minWindowSize = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minWindowSize = Math.min(minWindowSize, right - left + 1);

      windowSum -= nums[left];
      left++;
    }

    right++;
  }

  return minWindowSize === Number.MAX_SAFE_INTEGER ? 0 : minWindowSize;
};

console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen((target = 4), (nums = [1, 4, 4])));
console.log(minSubArrayLen((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1])));
