/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let currentOnesCounter = 0;
  let longestOnesCounter = 0;

  while (right < nums.length) {
    const num = nums[right];
    if (num === 0) currentOnesCounter++;

    while (currentOnesCounter > k) {
      if (nums[left] === 0) currentOnesCounter--;
      left++;
    }

    longestOnesCounter = Math.max(longestOnesCounter, right - left + 1);

    right++;
  }

  return longestOnesCounter;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
