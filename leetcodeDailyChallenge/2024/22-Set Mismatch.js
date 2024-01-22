/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const numSet = new Set();
  const result = [0, 0];

  for (let i = 1; i <= nums.length; i++) {
    if (numSet.has(nums[i - 1])) {
      result[0] = nums[i - 1];
    }
    numSet.add(nums[i - 1]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      result[1] = i;
      return result;
    }
  }

  return result;
};
