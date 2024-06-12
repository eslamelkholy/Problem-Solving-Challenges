/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let lo = 0;
  let hi = nums.length - 1;
  let i = 0;

  while (i <= hi) {
    if (nums[i] === 0) swap(nums, lo++, i++);
    else if (nums[i] === 2) swap(nums, i, hi--);
    else if (nums[i] === 1) i++;
  }
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
