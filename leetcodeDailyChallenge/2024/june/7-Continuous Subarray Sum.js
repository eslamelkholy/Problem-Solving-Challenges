/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let currentSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum === k || currentSum % k === 0) return true;
    }
  }

  return false;
};
