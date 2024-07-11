/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  const result = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(result.length);
    } else if (char === ")") {
      const startIndex = stack.pop();
      const reversed = result.slice(startIndex).reverse();

      result.splice(startIndex, reversed.length);
      result.push(...reversed);
    } else {
      result.push(char);
    }
  }

  return result.join("");
};
