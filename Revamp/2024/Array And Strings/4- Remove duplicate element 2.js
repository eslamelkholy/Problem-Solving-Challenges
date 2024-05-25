/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (prev === nums[i] && nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }

    prev = nums[i];
  }

  return nums.length;
};
