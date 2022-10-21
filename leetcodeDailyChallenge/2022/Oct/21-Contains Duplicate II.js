/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numMap[num] !== undefined && Math.abs(i - numMap[num]) <= k) {
      return true;
    }
    numMap[num] = i;
  }

  return false;
};
