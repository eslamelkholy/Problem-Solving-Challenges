/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;

  nums.unshift(1);
  nums.push(1);

  const dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));

  for (let length = 1; length <= n; length++) {
    for (let start = 1; start + length - 1 <= n; start++) {
      const end = start + length - 1;

      let highestPoint = 0;

      for (let i = start; i <= end; i++) {
        const burstResult = nums[start - 1] * nums[i] * nums[end + 1] + dp[start][i - 1] + dp[i + 1][end];

        if (burstResult > highestPoint) highestPoint = burstResult;
      }

      dp[start][end] = highestPoint;
    }
  }

  console.log(dp);

  return dp[1][n];
};

console.log(maxCoins([3, 1, 5, 8]));
