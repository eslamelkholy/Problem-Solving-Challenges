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
