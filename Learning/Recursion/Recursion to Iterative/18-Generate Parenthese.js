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

var generateParenthesis = function (n) {
  const stack = [{ combination: "", left: n, right: n }];
  const result = [];

  while (stack.length > 0) {
    const { combination, left, right } = stack.pop();
    if (left > right) continue;

    if (left > 0) {
      stack.push({ combination: combination + "(", left: left - 1, right });
    }
    if (right > 0) {
      stack.push({ combination: combination + ")", left, right: right - 1 });
    }

    if (left === 0 && right === 0) result.push(combination);
  }

  return result;
};

console.log(generateParenthesis(3));
