/**
 * @param {string} strs
 */
const largestSubarrayOneFlip = (strs) => {
  let right = 0;
  let left = 0;
  let countZeros = 0;
  let maxLength = 0;

  while (right < strs.length) {
    const currentStr = strs[right];

    if (currentStr === "0") countZeros++;

    while (countZeros > 1) {
      if (strs[left] === "0") {
        countZeros--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);

    right++;
  }
  return maxLength;
};

console.log(largestSubarrayOneFlip("1101100111"));

// https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4502/
