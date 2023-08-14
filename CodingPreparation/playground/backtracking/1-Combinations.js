/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const memo = new Array(k).fill(false);

  const backtrack = (currentCombination, index, memo) => {
    if (currentCombination.length === k) return result.push(currentCombination);

    for (let i = index; i <= n; i++) {
      if (memo[i]) continue;

      currentCombination.push(i);
      memo[i] = true;

      backtrack([...currentCombination], i + 1, memo);

      currentCombination.pop(i);
      memo[i] = false;
    }
  };

  backtrack([], 1, memo);

  return result;
};

console.log(combine((n = 4), (k = 2)));
