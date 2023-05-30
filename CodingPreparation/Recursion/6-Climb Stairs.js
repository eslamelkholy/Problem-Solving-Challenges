/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};
  return climb(n, 0, memo);
};

const climb = (n, currentStairs, memo) => {
  if (memo[currentStairs] !== undefined) return memo[currentStairs];

  if (currentStairs === n) return 1;
  if (currentStairs > n) return 0;

  memo[currentStairs] = climb(n, currentStairs + 1, memo) + climb(n, currentStairs + 2, memo);

  return memo[currentStairs];
};

// 1 1 1
// 1 2
// 2 1

console.log(climbStairs(3));
