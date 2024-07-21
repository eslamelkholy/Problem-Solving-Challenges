/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const maxNumber = Math.max(...nums);
  const pointsMap = {};

  for (const num of nums) pointsMap[num]++ || (pointsMap[num] = 1);

  const dp = new Array(maxNumber + 1).fill(0);
  dp[1] = pointsMap[1] || 0;

  for (let i = 2; i < dp.length; i++) {
    const gainedPoints = pointsMap[i] ? pointsMap[i] * i : 0;

    dp[i] = Math.max(dp[i - 1], gainedPoints + dp[i - 2]);
  }

  return dp[maxNumber];
};
