/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  const numMapCounter = {};

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (numMapCounter[nums[i]]) numMapCounter[nums[i]]++;
    else numMapCounter[nums[i]] = 1;
  }

  console.log(nums);
  for (let i = 0; i < n; i++) {
    dp[i] = nums[i] + Math.max(nums[i], nums[n - 1]);
  }

  console.log(dp);
};

console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
