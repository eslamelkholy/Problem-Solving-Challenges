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
