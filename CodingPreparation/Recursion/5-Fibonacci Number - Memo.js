/**
 * @param {number} n
 * @return {number}
 */
var fibNormal = function (n) {
  if (n < 2) return n;

  return fibNormal(n - 1) + fibNormal(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var fibmemo = function (n) {
  return calculate(n, {});
};

const calculate = (n, memo) => {
  if (memo[n] !== undefined) return memo[n];

  if (n < 2) return (memo[n] = n);

  return (memo[n] = calculate(n - 1, memo) + calculate(n - 2, memo));
};

/**
 * @param {number} n
 * @return {number}
 */
var fibDP = function (n) {
  const dp = new Array(n).fill(1);
  if (n < 2) return n;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};

console.log(fibDP(10));
