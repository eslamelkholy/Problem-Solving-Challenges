/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const backtrack = (currentCombine, index) => {
    if (currentCombine.length === k) return result.push(currentCombine);

    for (let i = index; i < n + 1; i++) {
      if (currentCombine.includes(i)) continue;

      currentCombine.push(i);

      backtrack([...currentCombine], i);

      currentCombine.pop();
    }
  };
  backtrack([], 1);

  return result;
};

console.log(combine((n = 4), (k = 2)));
