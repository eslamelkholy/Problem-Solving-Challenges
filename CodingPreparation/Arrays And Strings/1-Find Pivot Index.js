/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  let leftSum = 0;

  for (const num of nums) {
    sum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - nums[i] - leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex((nums = [1, 7, 3, 6, 5, 6])));
