/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      if (nums[l] + nums[r] + nums[i] === 0) {
        result.push([nums[i], nums[l], nums[r]]);
      } else if (nums[l] + nums[r] + nums[i] > 0) {
        r--;
        continue;
      } else if (nums[l] + nums[r] + nums[i] < 0) {
        l++;
        continue;
      }

      l++;

      while (l < nums.length && nums[l] === nums[l - 1]) {
        l++;
      }
    }
  }

  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
