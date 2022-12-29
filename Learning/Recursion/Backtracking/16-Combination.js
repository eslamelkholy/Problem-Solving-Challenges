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

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const memo = new Array(k).fill(false);

  backtrack(1, [], k, n, result, memo);

  return result;
};

const backtrack = (index, currentCombination, limit, n, result, memo) => {
  if (currentCombination.length === limit) {
    result.push([...currentCombination]);
  }

  for (let i = index; i <= n; i++) {
    if (memo[i]) continue;
    currentCombination.push(i);
    memo[i] = true;

    backtrack(i + 1, currentCombination, limit, n, result, memo);

    memo[i] = false;
    currentCombination.pop();
  }
};

console.log(combine(4, 2));

console.log(combine(4, 2));
