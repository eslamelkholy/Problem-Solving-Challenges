/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const backtrack = (currentCombination, index) => {
    if (currentCombination.length === k) return result.push(currentCombination);

    for (let i = index; i <= n; i++) {
      if (currentCombination.includes(i)) continue;

      currentCombination.push(i);

      backtrack([...currentCombination], i + 1);

      currentCombination.pop(i);
    }
  };

  backtrack([], 1);

  return result;
};

console.log(combine((n = 4), (k = 2)));
