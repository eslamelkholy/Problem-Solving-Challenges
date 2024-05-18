/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  backtrack(n, k, [], result, 1);

  return result;
};

const backtrack = (n, k, currentCombination, result, index) => {
  if (currentCombination.length === k) {
    return result.push([...currentCombination]);
  }

  for (let i = index; i <= n; i++) {
    if (currentCombination.includes(i)) continue;

    currentCombination.push(i);

    backtrack(n, k, currentCombination, result, i + 1);

    currentCombination.pop();
  }
};

console.log(combine(4, 2));
