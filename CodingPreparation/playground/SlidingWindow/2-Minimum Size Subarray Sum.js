/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = Number.MAX_SAFE_INTEGER;
  let right = 0;
  let left = 0;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }

    right++;
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen((target = 4), (nums = [1, 4, 4])));
console.log(minSubArrayLen((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1])));
console.log(minSubArrayLen(11, (nums = [1, 2, 3, 4, 5])));
