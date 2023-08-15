/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0;
  let right = 0;
  let currentProduct = 1;
  let subArrayLength = 0;

  if (k <= 1) return 0;

  while (right < nums.length) {
    currentProduct *= nums[right];

    while (currentProduct >= k) {
      currentProduct /= nums[left];
      left++;
    }

    subArrayLength += right - left + 1;

    right++;
  }

  return subArrayLength;
};

console.log(numSubarrayProductLessThanK((nums = [10, 5, 2, 6]), (k = 100)));
console.log(numSubarrayProductLessThanK((nums = [1, 2, 3]), (k = 0)));
