//https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4502/

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
