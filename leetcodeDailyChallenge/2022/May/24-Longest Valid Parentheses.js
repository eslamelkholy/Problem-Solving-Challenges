/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let longestParenteses = 0;
  const dp = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == ')') {
      if (s.charAt(i - 1) == '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) == '(') {
        dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      longestParenteses = Math.max(longestParenteses, dp[i]);
    }
  }
  return longestParenteses;
};

console.log(longestValidParentheses('()'));
console.log(longestValidParentheses('(()'));
var longestValidParentheses = function (s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isValidParentheses(s.substring(i, j))) {
        maxLen = Math.max(maxLen, j - i);
      }
    }
  }
  return maxLen;
};

const isValidParentheses = (str) => {
  const stack = [];

  for (const char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (stack.length !== 0 && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
