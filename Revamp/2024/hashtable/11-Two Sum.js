/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let sumMap = {};

  for (let i = 0; i < nums.length; i++) {
    const sumTarget = target - nums[i];
    if (sumMap[sumTarget] !== undefined) {
      return [sumMap[sumTarget], i];
    }

    sumMap[nums[i]] = i;
  }
};
