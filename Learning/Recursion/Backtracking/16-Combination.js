/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  backtrack(1, [], k, n, result);

  return result;
};

const backtrack = (index, currentCombination, limit, n, result) => {
  if (currentCombination.length === limit) {
    result.push([...currentCombination]);
  }

  for (let i = index; i <= n; i++) {
    if (currentCombination.includes(i)) continue;
    currentCombination.push(i);

    backtrack(i + 1, currentCombination, limit, n, result);

    currentCombination.pop();
  }
};

console.log(combine(4, 2));
