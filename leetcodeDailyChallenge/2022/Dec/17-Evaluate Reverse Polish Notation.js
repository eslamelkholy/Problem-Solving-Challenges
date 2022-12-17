/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const nums = [];

  for (const token of tokens) {
    if (token in operationMap) {
      const num1 = nums[nums.length - 2];
      nums[nums.length - 2] = operationMap[token](num1, nums.pop());
    } else {
      nums.push(parseInt(token));
    }
  }
  return nums[0];
};

const operationMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (a / b) | 0,
};
