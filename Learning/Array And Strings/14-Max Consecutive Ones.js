/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxSequence = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;

    let countOnes = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === 0) break;

      countOnes++;
    }
    maxSequence = Math.max(maxSequence, countOnes);
  }

  return maxSequence;
};
