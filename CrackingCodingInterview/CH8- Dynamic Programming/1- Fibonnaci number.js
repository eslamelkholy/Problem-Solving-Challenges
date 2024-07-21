/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return calculateFib(n, {});
};

const calculateFib = (n, memo) => {
  if (memo[n]) return memo[n];

  if (n === 0 || n === 1) {
    return n;
  }

  memo[n] = calculateFib(n - 1, memo) + calculateFib(n - 2, memo);

  return memo[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0 || n === 1) return n;

  const dp = new Array(n).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1] + dp[n - 2];
};
