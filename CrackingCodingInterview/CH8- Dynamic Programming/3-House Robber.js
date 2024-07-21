/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const N = nums.length;
  const dp = new Array(N).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[N - 1];
};
