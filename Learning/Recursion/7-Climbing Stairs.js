/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climb(0, n);
};

const climb = (index, n) => {
  if (index > n) return 0;

  if (index === n) return 1;

  return climb(index + 1, n) + climb(index + 2, n);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};
  return climb(0, n, memo);
};

const climb = (index, n, memo) => {
  if (index > n) return 0;

  if (index === n) return 1;

  if (memo[index] !== undefined) return memo[index];

  memo[index] = climb(index + 1, n, memo) + climb(index + 2, n, memo);
  return memo[index];
};
