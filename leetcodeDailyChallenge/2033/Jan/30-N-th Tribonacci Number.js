/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  return calculate(n, {});
};

const calculate = (n, memo) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = calculate(n - 1, memo) + calculate(n - 2, memo) + calculate(n - 3, memo);

  return memo[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const dp = new Array(n);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};
