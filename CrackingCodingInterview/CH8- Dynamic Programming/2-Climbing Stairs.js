/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climb(0, n);
};

const climb = (i, n) => {
  if (i > n) {
    return 0;
  }

  if (i === n) {
    return 1;
  }

  return climb(i + 1, n) + climb(i + 2, n);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
