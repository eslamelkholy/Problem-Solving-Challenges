/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let minLength = Number.MAX_SAFE_INTEGER;
  let currentWindowValue = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    currentWindowValue += nums[right];

    while (currentWindowValue >= s) {
      minLength = Math.min(minLength, right - left + 1);

      currentWindowValue -= nums[left];
      left++;
    }

    right++;
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
