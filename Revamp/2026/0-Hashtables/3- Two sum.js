/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const rest = target - num;

    if (map[rest] !== undefined) {
      return [map[rest], i];
    }

    map[num] = i;
  }

  return [-1, -1];
};
