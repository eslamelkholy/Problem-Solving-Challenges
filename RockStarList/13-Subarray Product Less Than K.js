/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let numOfProduct = 0;
  let currentProductSum = 1;
  let left = 0;
  let right = 0;

  if (k <= 1) return 0;

  while (right < nums.length) {
    const num = nums[right];

    currentProductSum *= num;

    while (currentProductSum >= k) {
      currentProductSum /= nums[left];
      left++;
    }

    numOfProduct += right - left + 1;

    right++;
  }
  return numOfProduct;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
