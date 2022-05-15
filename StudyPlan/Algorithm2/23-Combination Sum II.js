/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum21 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (path = [], sum = 0, start = 0) => {
    if (sum > target) return;
    if (sum === target) return result.push(path);

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];

      if (num === candidates[i - 1] && i > start) continue;

      path.push(num);

      backtrack([...path], sum + num, i + 1);

      path.pop();
    }
  };

  backtrack();

  return result;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const combinations = [];

  const exploreCombination = (combination, sum, index) => {
    if (sum > target) return;
    if (sum === target) return combinations.push(combination);

    for (let i = index; i < candidates.length; i++) {
      const num = candidates[i];

      if (num === candidates[i - 1] && i > index) continue;

      exploreCombination([...combination, num], sum + num, i + 1);
    }
  };

  exploreCombination([], 0, 0);
  return combinations;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5));
