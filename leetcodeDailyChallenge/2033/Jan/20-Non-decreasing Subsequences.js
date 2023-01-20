/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  const memo = new Set();

  backtrack(result, 0, [], nums, memo);

  return result;
};

const backtrack = (result, index, combination, nums, memo) => {
  if (combination.length > 1) {
    const curr = combination.join(",");
    if (!memo.has(curr)) result.push(combination);
    memo.add(curr);
  }

  for (let i = index; i < nums.length; i++) {
    if (nums[i] < combination[combination.length - 1]) continue;

    combination.push(nums[i]);

    backtrack(result, i + 1, [...combination], nums, memo);

    combination.pop(nums[i]);
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = {};

  backtrack(result, 0, [], nums);

  return Object.values(result);
};

const backtrack = (result, index, combination, nums) => {
  if (index === nums.length) {
    if (combination.length > 1) {
      result[combination] = combination;
    }
    return;
  }

  if (combination.length === 0 || combination[combination.length - 1] <= nums[index]) {
    combination.push(nums[index]);

    backtrack(result, index + 1, [...combination], nums);

    combination.pop();
  }
  backtrack(result, index + 1, [...combination], nums);
};
