/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [-1];
  let ans = 0;
  for (let i = 0; i < s.length; i++)
    s[i] === '(' ? stack.push(i) : stack.length === 1 ? (stack[0] = i) : stack.pop(),
      (ans = Math.max(ans, i - stack[stack.length - 1]));

  return ans;
};

// console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses(')()())'));
// console.log(longestValidParentheses(')('));
// console.log(longestValidParentheses(''));
console.log(longestValidParentheses('()(())'));
