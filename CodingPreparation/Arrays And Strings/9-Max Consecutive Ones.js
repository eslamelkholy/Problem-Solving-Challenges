/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let slowPointer = 0;
  let maxOnes = 0;

  while (slowPointer < nums.length) {
    if (nums[slowPointer] === 1) {
      let fastPointer = slowPointer + 1;

      while (nums[fastPointer] === 1) {
        fastPointer++;
      }

      maxOnes = Math.max(maxOnes, fastPointer - slowPointer);
    }
    slowPointer++;
  }

  return maxOnes;
};

console.log(findMaxConsecutiveOnes((nums = [1, 1, 0, 1, 1, 1])));
console.log(findMaxConsecutiveOnes((nums = [1, 0, 1, 1, 0, 1])));
