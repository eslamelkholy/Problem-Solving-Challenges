/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = new Array(n).fill(1);
  if (n === 0) return 0;
  if (n < 2) return 1;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};
