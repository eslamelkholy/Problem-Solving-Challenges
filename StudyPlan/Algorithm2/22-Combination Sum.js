/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const combinations = [];

  const exploreCombination = (combination, sum, index) => {
    if (sum > target) return;
    if (sum === target) combinations.push(combination);

    for (let i = index; i < candidates.length; i++) {
      const num = candidates[i];
      if (num + sum > target) break;

      exploreCombination([...combination, num], sum + num, i);
    }
  };

  exploreCombination([], 0, 0);
  return combinations;
};

var combinationSum2 = function (candidates, target) {
  const result = [];

  const backtrack = (path = [], sum = 0, start = 0) => {
    if (sum > target) return;
    if (sum === target) return result.push(path);

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);

      backtrack([...path], sum + candidates[i], i);

      path.pop();
    }
  };

  backtrack();

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
