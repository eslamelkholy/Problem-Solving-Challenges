/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum1 = function (candidates, target) {
  const combinations = [];
  const combinationsSet = new Set();

  /**
   * @param {[]} combination
   * @param {number} sum
   */
  const exploreCombination = (combination, sum) => {
    if (sum === target) {
      const combinedResult = combination.sort().join('');
      if (combinationsSet.has(combinedResult)) return;

      combinationsSet.add(combinedResult);
      return combinations.push(combination);
    }

    for (let i = 0; i < candidates.length; i++) {
      const num = candidates[i];
      if (num + sum > target) continue;

      exploreCombination([...combination, num], sum + num);
    }
  };

  exploreCombination([], 0, 0);
  return combinations;
};

var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (path = [], remain = target, start = 0) => {
    // base case
    if (remain < 0) {
      return;
    } else if (remain === 0) {
      return result.push([...path]);
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(path, remain - candidates[i], i);

      // backtrack last added
      path.pop();
    }
  };

  backtrack();

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
