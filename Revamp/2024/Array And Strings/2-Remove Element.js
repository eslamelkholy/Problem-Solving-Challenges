/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let right = nums.length - 1;
  let left = 0;
  let removed = 0;

  while (left < nums.length && left <= right) {
    if (nums[right] === val) {
      right--;
      removed++;
      continue;
    }

    if (nums[left] === val) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      right--;
      removed++;
    }

    left++;
  }

  return nums.length - removed;
};
