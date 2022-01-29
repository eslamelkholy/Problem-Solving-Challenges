/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

console.log(tribonacci(4)); // 4
console.log(tribonacci(25));
