/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const sumToTarget = target - nums[i];
    if (numMap[sumToTarget] && numMap[sumToTarget] !== i) {
      return [numMap[sumToTarget], i];
    }
  }

  return -1;
};
