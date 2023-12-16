/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num] !== undefined && Math.abs(i - map[num]) <= k) {
      return true;
    }
    map[num] = i;
  }

  return false;
};
