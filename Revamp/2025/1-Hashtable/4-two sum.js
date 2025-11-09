/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const found = target - num;
    if (map.get(found) !== undefined) return [i, map.get(found)];

    map.set(num, i);
  }

  return [-1, -1];
};
