/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (nums[left] !== target) return [-1, -1];

  let end = left;
  for (let i = left; i < nums.length; i++) {
    if (nums[i] !== target) break;

    end = i;
  }

  return [left, end];
};
