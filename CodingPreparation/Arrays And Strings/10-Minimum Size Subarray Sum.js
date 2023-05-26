/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minSubarr = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      minSubarr = Math.min(minSubarr, right - left + 1);
      sum -= nums[left];

      left++;
    }

    right++;
  }

  return minSubarr === Number.MAX_SAFE_INTEGER ? 0 : minSubarr;
};

console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen((target = 4), (nums = [1, 4, 4])));
console.log(minSubArrayLen((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1])));
