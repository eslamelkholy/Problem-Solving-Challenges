const assert = require('assert');

/**
 * @param {[]} inputArr - An array of positive integers.
 * @param {number} maxFlips - Maximum no of 0's that can be flipped to 1's.
 * @returns {number} - Length of the maximum possible sequence of continuous 1's.
 */
function getMaxSequence(inputArr, maxFlips) {
  let maxSequence = [];
  let currentFlips = 0;
  let left = 0;
  let right = 0;

  while (right < inputArr.length) {
    const currentBinary = inputArr[right];
    if (currentBinary === 0) {
      currentFlips++;
    }

    while (currentFlips > maxFlips) {
      if (inputArr[left] === 0) currentFlips--;
      left++;
    }

    const lengthOfSubSequence = right - left + 1;
    if (lengthOfSubSequence > maxSequence.length) {
      maxSequence = inputArr.slice(left, right + 1);
    }

    right++;
  }
  return maxSequence;
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0];
const maxFlips1 = 2;
const solution1 = [0, 1, 1, 0, 1, 1];

const calculatedSolution1 = getMaxSequence(exampleInput1, maxFlips1);

console.log(
  `Example Input #1: ${JSON.stringify(exampleInput1)}, Maximum Flips: ${maxFlips1}, Solution: ${JSON.stringify(
    calculatedSolution1
  )} (Length: ${calculatedSolution1.length})`
);
assert.deepStrictEqual(calculatedSolution1, solution1);

// test case #2
const exampleInput2 = [0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const maxFlips2 = 3;
const solution2 = [1, 0, 0, 0, 1, 1, 1, 1];

const calculatedSolution2 = getMaxSequence(exampleInput2, maxFlips2);

console.log(
  `Example Input #2: ${JSON.stringify(exampleInput2)}, Maximum Flips: ${maxFlips2}, Solution: ${JSON.stringify(
    calculatedSolution2
  )} (Length: ${calculatedSolution1.length})`
);
assert.deepStrictEqual(calculatedSolution2, solution2);
