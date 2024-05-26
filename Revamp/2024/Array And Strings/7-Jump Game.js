/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let steps = nums[0];

  for (let i = 1; i < nums.length; i++) {
    steps--;

    if (steps < 0) return false;

    if (nums[i] > steps) {
      steps = nums[i];
    }
  }

  return true;
};
