/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack([], result, nums);

  return result;
};

const backtrack = (currentPerm, result, nums) => {
  if (currentPerm.length === nums.length) {
    return result.push([...currentPerm]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (currentPerm.includes(nums[i])) continue;

    currentPerm.push(nums[i]);

    backtrack(currentPerm, result, nums);

    currentPerm.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack([], result, nums, new Set());

  return result;
};

const backtrack = (currentPerm, result, nums, visited) => {
  if (currentPerm.length === nums.length) {
    return result.push([...currentPerm]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) continue;

    currentPerm.push(nums[i]);
    visited.add(nums[i]);

    backtrack(currentPerm, result, nums, visited);

    visited.delete(nums[i]);
    currentPerm.pop();
  }
};
