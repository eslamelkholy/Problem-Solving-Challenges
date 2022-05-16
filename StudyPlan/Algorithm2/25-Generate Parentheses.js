/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = [];

  const backtrack = (leftRemain, rightRemain, set) => {
    if (leftRemain === 0 && rightRemain === 0) return result.push(set);
    if (leftRemain > rightRemain) return;

    if (leftRemain > 0) backtrack(leftRemain - 1, rightRemain, set + '(');
    if (rightRemain > 0) backtrack(leftRemain, rightRemain - 1, set + ')');
  };

  backtrack(n, n, '');

  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis2 = (n) => {
  const result = [];

  const backtrack = (leftVal, rightVal, set) => {
    if (leftVal === n && rightVal === n) return result.push(set);
    if (leftVal > rightVal) return;

    if (leftVal < n) backtrack(leftVal + 1, rightVal, set + ')');
    if (rightVal < n) backtrack(leftVal, rightVal + 1, set + '(');
  };

  backtrack(0, 0, '');

  return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
