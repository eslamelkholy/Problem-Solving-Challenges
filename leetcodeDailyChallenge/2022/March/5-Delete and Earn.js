/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const n = Math.max(...nums) + 1;

  const counts = new Array(n).fill(0);

  for (const num of nums) counts[num]++;

  const dp = new Array(n).fill(0);
  dp[1] = counts[1];

  for (let i = 2; i < n; i++) {
    const points = counts[i] * i;
    dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);
  }

  return dp[n - 1];
};
console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
