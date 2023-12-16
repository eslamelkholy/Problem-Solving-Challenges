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
    const rest = target - nums[i];

    if (numMap[rest] !== undefined && rest + nums[i] === target && i !== numMap[rest]) {
      return [i, numMap[rest]];
    }
  }

  return -1;
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
