/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  for (let i = m - 1; i >= 0; i--) {
    for (let left = i; left >= 0; left--) {
      const multi = multipliers[i];
      const right = n - 1 - (i - left);

      dp[i][left] = Math.max(multi * nums[left] + dp[i + 1][left + 1], multi * nums[right] + dp[i + 1][left]);
    }
  }

  return dp[0][0];
};
console.log(maximumScore([1, 2, 3], [3, 2, 1]));
console.log(maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]));
