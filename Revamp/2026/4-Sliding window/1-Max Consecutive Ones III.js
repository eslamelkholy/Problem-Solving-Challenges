/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxOnes = 0;
  let left = 0;
  let right = 0;
  let currentOnes = k;

  while (right < nums.length) {
    const num = nums[right];
    if (num === 0) currentOnes--;

    while (currentOnes < 0) {
      if (nums[left] === 0) currentOnes++;
      left++;
    }

    maxOnes = Math.max(maxOnes, right - left + 1);

    right++;
  }

  return maxOnes;
};
