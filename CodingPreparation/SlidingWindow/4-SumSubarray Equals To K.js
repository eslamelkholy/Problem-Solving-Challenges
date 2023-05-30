//https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4502/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumSubarrayLenghtK = function (nums, k) {
  let right = k;
  let left = 0;
  let currentSum = 0;
  let largestSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  while (right < nums.length) {
    largestSum = Math.max(currentSum, largestSum);

    currentSum -= nums[left];
    currentSum += nums[right];

    left++;
    right++;
  }

  return largestSum;
};

console.log(sumSubarrayLenghtK((nums = [3, -1, 4, 12, -8, 5, 6]), (k = 4)));
