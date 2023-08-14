/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let flips = 0;
  let maxLength = 0;

  while (right < nums.length) {
    const num = nums[right];

    if (num === 0) flips++;

    while (flips > k) {
      if (nums[left] === 0) {
        flips--;
      }

      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }

  return maxLength;
};
console.log(longestOnes((nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2)));
console.log(longestOnes((nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]), (k = 3)));
