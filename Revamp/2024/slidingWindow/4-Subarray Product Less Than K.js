/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0;
  let right = 0;
  let currentProduct = 1;
  let productCount = 0;
  if (k <= 1) return 0;

  while (right < nums.length) {
    currentProduct *= nums[right];

    while (currentProduct >= k) {
      currentProduct /= nums[left];

      left++;
    }

    productCount += right - left + 1;

    right++;
  }

  return productCount;
};
