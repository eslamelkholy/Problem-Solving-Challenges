/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let ptr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      ptr = i;
      min = max;
    }
    max = Math.max(nums[i], max);
  }
  return ptr + 1;
};
