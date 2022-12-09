/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const memo = { 0: 0, 1: 1 };
  return compute(n, memo);
};

const compute = (n, memo) => {
  if (memo[n] !== undefined) return memo[n];

  memo[n] = compute(n - 1, memo) + compute(n - 2, memo);

  return memo[n];
};
