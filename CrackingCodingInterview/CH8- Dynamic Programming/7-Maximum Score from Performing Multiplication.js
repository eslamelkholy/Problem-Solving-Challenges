/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  const N = nums.length;
  const M = multipliers.length;
  const dp = new Array(M + 1).fill(0).map(() => new Array(M + 1).fill(0));

  // Start from end
  for (let i = M - 1; i >= 0; i--) {
    // so left = i to 0;
    for (let left = i; left >= 0; left--) {
      const right = N - 1 - (i - left);

      dp[i][left] = Math.max(multipliers[i] * nums[left] + dp[i + 1][left + 1], multipliers[i] * nums[right] + dp[i + 1][left]);
    }
  }
  return dp[0][0];
};

console.log(maximumScore((nums = [1, 2, 3]), (multipliers = [3, 2, 1])));
