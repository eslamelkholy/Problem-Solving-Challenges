/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const combinedSet = new Set();

  const dfs = ({ sum, res }, index) => {
    if (sum === n && res.length === k) {
      const combination = res.sort().join('');
      if (combinedSet.has(combination)) return;

      combinedSet.add(combination);
      return result.push(res);
    }

    if (res.length > k || sum > n) return;
    for (let i = index; i <= 9; i++) {
      if (res.includes(i)) continue;
      dfs({ sum: sum + i, res: [...res, i] }, index + 1);
    }
  };

  dfs(
    {
      sum: 0,
      res: [],
    },
    1
  );

  return result;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(2, 18));
