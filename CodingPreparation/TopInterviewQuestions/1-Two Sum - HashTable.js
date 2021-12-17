// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) numsMap[nums[i]] = i;

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];

    if (numsMap[rest] && numsMap[rest] !== i) {
      return [i, numsMap[rest]];
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));

console.log(twoSum([1, 3, 4, 2], 6));
