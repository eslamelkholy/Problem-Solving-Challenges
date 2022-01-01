var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let lengthOfLongestSubSequence = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < 1 + dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
    lengthOfLongestSubSequence = Math.max(lengthOfLongestSubSequence, dp[i]);
  }
  return lengthOfLongestSubSequence;
};
