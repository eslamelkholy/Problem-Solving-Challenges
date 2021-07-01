/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * [ Test Cases ]
 * 1- nums = [2,7,11,15], target = 9 // [0,1]
 * 2- nums = [3,2,4], target = 6 // [1,2]
 * 3- nums = [3,3], target = 6 // [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const store = [];
  let outerLoopCondition = true;
  for (let index1 = 0; index1 < nums.length && outerLoopCondition; index1++)
    for (let index2 = 0; index2 < nums.length; index2++)
      if (nums[index2] + nums[index1] === target && index1 !== index2) {
        store.push(index1);
        store.push(index2);
        outerLoopCondition = false;
        break;
      }

  return store;
};
console.log(twoSum([2, 7, 11, 15], 9));
