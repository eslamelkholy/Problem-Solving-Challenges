/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backTrack = (index, sum, candidate) => {
    if (sum === target) return result.push(candidate);
    if (sum > target) return;

    for (let i = index; i < candidates.length; i++) {
      backTrack(i, sum + candidates[i], [...candidate, candidates[i]]);
    }
  };

  backTrack(0, 0, []);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
