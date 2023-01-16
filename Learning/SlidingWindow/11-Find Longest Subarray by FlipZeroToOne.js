const findLength = (s) => {
  let maxSubarray = 0;
  let left = 0;
  let right = 0;
  let fliped = 0;

  while (right < s.length) {
    const curr = s[right];

    if (curr === "0") {
      fliped++;
    }

    while (fliped > 1) {
      if (s[left] === "0") fliped--;
      left++;
    }

    maxSubarray = Math.max(maxSubarray, right - left + 1);

    right++;
  }
  return maxSubarray;
};

console.log(findLength((nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]), (k = 8))); // Longest Subarray where sum <= k
