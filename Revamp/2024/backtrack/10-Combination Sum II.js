/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  backtrack(candidates, result, target, 0, [], 0);

  return result;
};

const backtrack = (candidates, result, target, index, currentCombination, sum) => {
  if (sum === target) {
    return result.push([...currentCombination]);
  }

  if (sum > target) return;

  for (let i = index; i < candidates.length; i++) {
    const candidate = candidates[i];

    if (candidate === candidates[i - 1] && i > index) continue;

    currentCombination.push(candidate);

    backtrack(candidates, result, target, i + 1, currentCombination, sum + candidate);

    currentCombination.pop();
  }
};
