/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  backtrack([], result, 1, n, k);

  return result;
};

const backtrack = (currentCombination, result, startIndex, n, limit) => {
  if (currentCombination.length === limit) {
    return result.push([...currentCombination]);
  }

  for (let i = startIndex; i < n + 1; i++) {
    currentCombination.push(i);

    backtrack(currentCombination, result, i + 1, n, limit);

    currentCombination.pop();
  }
};
console.log(combine(4, 2));
console.log(combine(1, 1));

// https://leetcode.com/problems/combinations/
