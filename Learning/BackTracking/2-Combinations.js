/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combinations = [];
  permute(combinations, [], k, n, 1);

  return combinations;
};

/**
 *
 * @param {number[][]} result
 * @param {number[]} currentList
 * @param {number} limit
 * @param {number} N
 * @param {number} index
 */
const permute = (result, currentList, limit, N, index) => {
  if (currentList.length === limit) {
    return result.push([...currentList]);
  }

  for (let i = index; i <= N; i++) {
    if (currentList.includes(i)) continue;

    currentList.push(i);

    permute(result, currentList, limit, N, i + 1);

    currentList.pop();
  }
};

console.log(combine(4, 2));
console.log(combine(1, 1));

// https://leetcode.com/problems/combinations/
