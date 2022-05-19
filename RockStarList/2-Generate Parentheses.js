/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = [];

  const backTrack = (leftRemain, rightRemain, parentheses) => {
    if (leftRemain === 0 && rightRemain === 0) result.push(parentheses);
    if (leftRemain > rightRemain) return;

    if (leftRemain > 0) backTrack(leftRemain - 1, rightRemain, parentheses + '(');
    if (rightRemain > 0) backTrack(leftRemain, rightRemain - 1, parentheses + ')');
  };

  backTrack(n, n, '');

  return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
