/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};
  return climb(0, memo, n);
};

const climb = (stair, memo, n) => {
  if (memo[stair] !== undefined) return memo[stair];

  if (stair > n) return 0;
  if (stair === n) return 1;

  memo[stair] = climb(stair + 1, memo, n) + climb(stair + 2, memo, n);

  return memo[stair];
};
