/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxOnes = 0;
  let flips = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    const currNum = nums[right];

    if (currNum === 0) {
      flips++;
    }

    while (flips > k) {
      if (nums[left] === 0) {
        flips--;
      }
      left++;
    }

    maxOnes = Math.max(maxOnes, right - left + 1);
    right++;
  }

  return maxOnes;
};

console.log(longestOnes((nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2)));
console.log(longestOnes((nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]), (k = 3)));
