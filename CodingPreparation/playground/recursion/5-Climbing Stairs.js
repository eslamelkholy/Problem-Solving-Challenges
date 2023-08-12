/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};

  return climb(n, 0, memo);
};

const climb = (n, currentStair, memo) => {
  if (memo[currentStair] !== undefined) return memo[currentStair];

  if (currentStair === n) return 1;
  if (currentStair > n) return 0;

  memo[currentStair] = climb(n, currentStair + 1, memo) + climb(n, currentStair + 2, memo);

  return memo[currentStair];
};

console.log(climbStairs(3));
