/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  function backtrack(start = 1, path = []) {
    if (path.length == k) {
      res.push(Array.from(path));
    } else {
      for (let i = start; i <= n; i++) {
        path.push(i);
        backtrack(i + 1, path);
        path.pop();
      }
    }
  }
  backtrack();
  return res;
};

var combine = function (n, k) {
  if (k < 1) {
    return [];
  }
  const results = [];
  for (let i = n; i > k - 1; i--) {
    const combinations = combine(i - 1, k - 1);
    if (combinations.length) {
      for (const combination of combinations) {
        results.push([i, ...combination]);
      }
    } else {
      results.push([i]);
    }
  }
  return results;
};
console.log(combine(4, 2));
