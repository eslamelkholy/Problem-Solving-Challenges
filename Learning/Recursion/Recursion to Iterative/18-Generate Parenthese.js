/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  backtrack(n, n, "", result);

  return result;
};

const backtrack = (leftRemain, rightRemain, current, result) => {
  if (leftRemain === 0 && rightRemain === 0) result.push(current);
  if (leftRemain > rightRemain) return;

  if (leftRemain > 0) backtrack(leftRemain - 1, rightRemain, current + "(", result);
  if (rightRemain > 0) backtrack(leftRemain, rightRemain - 1, current + ")", result);
};

console.log(generateParenthesis(3));
