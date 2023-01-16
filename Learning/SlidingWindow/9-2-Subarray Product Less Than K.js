/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let product = 1;
  let left = 0;
  let right = 0;
  let numOfProduct = 0;
  if (k <= 1) return 0;

  while (right < nums.length) {
    const num = nums[right];
    product = product * num;

    while (product >= k) {
      product = product / nums[left];
      left++;
    }

    numOfProduct += right - left + 1;

    right++;
  }
  return numOfProduct;
};

console.log(numSubarrayProductLessThanK((nums = [10, 5, 2, 6]), (k = 100)));
// console.log(numSubarrayProductLessThanK((nums = [1, 2, 3]), (k = 0)));
// console.log(numSubarrayProductLessThanK([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19));
