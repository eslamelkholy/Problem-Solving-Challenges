var numDecodings = function (s) {
  const dp = Array(s.length + 1).fill(0);
  if (s[0] === '0') return 0;
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= s.length; i++) {
    const oneDigit = +s.slice(i - 1, i);
    const twoDigits = +s.slice(i - 2, i);
    if (oneDigit > 0) dp[i] = dp[i - 1];
    if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i - 2];
  }
  return dp[s.length];
};
