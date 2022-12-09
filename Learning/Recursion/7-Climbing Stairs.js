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
