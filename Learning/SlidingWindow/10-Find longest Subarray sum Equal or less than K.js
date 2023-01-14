const findLength = (nums, k) => {
  let maxLength = 0;
  let currentSum = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Compute Sum
    currentSum += nums[right];

    // Compare currentSum with K
    if (currentSum <= k) {
      maxLength = Math.max(maxLength, right - left + 1); // Window Length left = 1, right = 3
    }

    while (currentSum > k) {
      currentSum -= nums[left];
      left++;
    }

    right++;
  }

  return maxLength;
};

console.log(findLength((nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]), (k = 8))); // Longest Subarray where sum <= k
