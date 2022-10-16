/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;

    nums[pos] = nums[i];
    pos++;
  }

  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
