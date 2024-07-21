/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const N = cost.length;
  const dp = new Array(N).fill(0);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < N; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[N - 1], dp[N - 2]);
};
