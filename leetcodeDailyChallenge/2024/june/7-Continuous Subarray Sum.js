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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let prefixMod = 0;
  let modSeen = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    prefixMod = (prefixMod + nums[i]) % k;

    if (modSeen[prefixMod] !== undefined) {
      if (i - modSeen[prefixMod] > 1) return true;
    } else {
      modSeen[prefixMod] = i;
    }
  }

  return false;
};
