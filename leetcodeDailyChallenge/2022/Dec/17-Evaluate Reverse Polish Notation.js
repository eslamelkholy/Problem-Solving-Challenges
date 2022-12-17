/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (operationMap[token] === undefined) {
      stack.push(Number(token));
      continue;
    }
    const num2 = stack.pop();
    const num1 = stack.pop();
    const result = operationMap[token](num1, num2);
    stack.push(result);
  }
  return stack[0];
};

const operationMap = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => Math.trunc(num1 / num2),
};
