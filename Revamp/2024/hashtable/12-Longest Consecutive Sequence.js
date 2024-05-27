/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums = [...new Set([...nums])];
  nums.sort((a, b) => a - b);
  let currentSeq = 0;
  let longestSeq = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num - 1 === nums[i - 1]) {
      currentSeq++;
    } else {
      currentSeq = 1;
    }
    longestSeq = Math.max(longestSeq, currentSeq);
  }

  return longestSeq;
};
