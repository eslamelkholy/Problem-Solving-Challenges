/**
 * @param {number} n
 * @return {number}
 */
var climbStairsNotMemoized = function (n) {
  const dp = (stair) => {
    if (stair <= 2) return stair; // Base cases
    return dp(stair - 1) + dp(stair - 2); // Recurrence relation
  };

  return dp(n);
};

/**
 * Note this Solution is So Bad
 * because we haven't Memoized Anything the Complexity O(2^n)
 * because every call to \text{dp}dp creates 2 more calls to \text{dp}dp.
 * If we wanted to find how many ways there are to climb to the 250th step,
 * the number of operations we would have to do is approximately equal to the number of atoms in the universe.
 */

// Solution2 Using Memoization by Caching Result [Top-Down Approach]
var climbStairsTopDown = function (n) {
  const memo = {};
  const dp = (stair) => {
    if (stair <= 2) return stair; // Base cases

    if (memo[stair]) return memo[stair];

    memo[stair] = dp(stair - 1) + dp(stair - 2); // Caching Result if Not Exists
    return memo[stair];
  };

  return dp(n);
};

// Solution3 Bottom-Up
var climbStairsBottomUp = function (n) {
  if (n === 1) return n;

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(climbStairsBottomUp(4));
