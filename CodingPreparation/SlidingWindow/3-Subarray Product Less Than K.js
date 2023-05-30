/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let right = 0;
  let left = 0;
  let currentProd = 1;
  let numOfSubarr = 0;

  if (k <= 1) return 0;

  while (right < nums.length) {
    currentProd *= nums[right];

    while (currentProd >= k) {
      currentProd /= nums[left];

      left++;
    }

    numOfSubarr += right - left + 1;

    right++;
  }

  return numOfSubarr;
};

console.log(numSubarrayProductLessThanK((nums = [10, 5, 2, 6]), (k = 100)));
