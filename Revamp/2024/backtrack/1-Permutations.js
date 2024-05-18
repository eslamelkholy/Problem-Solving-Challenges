/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   const result = [];

//   backtrack([], result, nums);

//   return result;
// };

// const backtrack = (currentCombination, result, nums) => {
//   if (currentCombination.length === nums.length) {
//     return result.push(currentCombination);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (currentCombination.includes(num)) continue;

//     currentCombination.push(num);

//     backtrack([...currentCombination], result, nums);

//     currentCombination.pop();
//   }
// };

// Permutation + Caching mechanism
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack([], new Array(nums.length).fill(false), result, nums);

  return result;
};

const backtrack = (currentCombination, visited, result, nums) => {
  if (currentCombination.length === nums.length) {
    return result.push(currentCombination);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (visited[i]) continue;

    currentCombination.push(num);
    visited[i] = true;

    backtrack([...currentCombination], visited, result, nums);

    currentCombination.pop();
    visited[i] = false;
  }
};

console.log(permute((nums = [1, 2, 3])));
