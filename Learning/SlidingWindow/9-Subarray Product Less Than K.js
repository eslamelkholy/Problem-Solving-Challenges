/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let left = 0;
  let right = 0;
  let numOfProduct = 0;
  let currentProduct = 1;

  while (right < nums.length) {
    const num = nums[right];
    currentProduct = currentProduct * num;

    while (currentProduct >= k) {
      currentProduct = currentProduct / nums[left];
      left++;
    }

    numOfProduct += right - left + 1;

    right++;
  }

  return numOfProduct;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));

console.log(numSubarrayProductLessThanK([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19));
