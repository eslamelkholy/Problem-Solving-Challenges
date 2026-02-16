/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num === 0) {
      currentCount = 0;
      continue;
    }

    currentCount++;
    max = Math.max(currentCount, max);
  }

  return max;
};
