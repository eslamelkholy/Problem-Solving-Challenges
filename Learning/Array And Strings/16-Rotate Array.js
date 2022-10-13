/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;
  let temp;
  let prev;

  for (let i = 0; i < k; i++) {
    prev = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = prev;
      prev = temp;
    }
  }
  return nums;
};
