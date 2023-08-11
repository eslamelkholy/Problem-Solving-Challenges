/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const rest = target - num;

    if (numMap.has(rest)) {
      return [numMap.get(rest), i];
    }
    numMap.set(num, i);
  }

  return [0, 0];
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
