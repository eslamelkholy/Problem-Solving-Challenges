/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let result = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= s) {
      let len = right - left + 1;
      if (result === 0 || len < result) result = len;
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return result;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
