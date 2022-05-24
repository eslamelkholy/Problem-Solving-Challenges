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
