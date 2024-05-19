/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (currentCombination, index, sum) => {
    if (sum > target) return;
    if (sum === target) return result.push([...currentCombination]);

    for (let i = index; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);

      backtrack(currentCombination, i, sum + candidates[i]);

      currentCombination.pop();
    }
  };
  backtrack([], 0, 0);

  return result;
};
