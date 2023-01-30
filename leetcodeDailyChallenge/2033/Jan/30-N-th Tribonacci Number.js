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
