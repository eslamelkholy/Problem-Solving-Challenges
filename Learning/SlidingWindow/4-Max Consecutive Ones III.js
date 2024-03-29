/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (inputArr, maxFlips) {
  let maxSequence = 0;
  let currentFlips = 0;
  let left = 0;
  let right = 0;

  while (right < inputArr.length) {
    if (inputArr[right] === 0) {
      currentFlips++;
    }

    while (currentFlips > maxFlips) {
      if (inputArr[left] === 0) currentFlips--;
      left++;
    }

    maxSequence = Math.max(maxSequence, right - left + 1);

    right++;
  }
  return maxSequence;
};

console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
