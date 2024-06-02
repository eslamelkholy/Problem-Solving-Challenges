/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climb(n, 0);
};

const climb = (n, stairs) => {
  if (stairs > n) return 0;

  if (stairs === n) return 1;

  return climb(n, stairs + 1) + climb(n, stairs + 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};
  return climb2(n, 0, memo);
};

const climb2 = (n, stairs, memo) => {
  if (memo[stairs] !== undefined) return memo[stairs];

  if (stairs > n) return 0;

  if (stairs === n) return 1;

  memo[stairs] = climb(n, stairs + 1, memo) + climb(n, stairs + 2, memo);

  return memo[stairs];
};
