/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack([], result, nums);

  return result;
};

const backtrack = (currentCombination, result, nums) => {
  if (currentCombination.length === nums.length) {
    return result.push(currentCombination);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (currentCombination.includes(num)) continue;

    currentCombination.push(num);

    backtrack([...currentCombination], result, nums);

    currentCombination.pop();
  }
};

console.log(permute((nums = [1, 2, 3])));
