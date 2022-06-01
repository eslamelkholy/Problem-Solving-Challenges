const assert = require('assert');

/**
 *
 * @param {[]} inputArr - An array of positive integers.
 * @param {number} desiredSum - The desired sum as an integer.
 * @returns {[]} - An array of subarrays that add up to the desired sum.
 */
function getSubarrays(inputArr, desiredSum) {
  const subArrays = [];
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < inputArr.length) {
    currentSum += inputArr[right];

    // Sum > target
    while (currentSum > desiredSum) {
      currentSum -= inputArr[left];
      left++;
    }

    if (currentSum === desiredSum) {
      subArrays.push(inputArr.slice(left, right + 1));
    }

    right++;
  }

  return subArrays;
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [1, 7, 9, 4, 3, 2, 2];
const desiredSum1 = 7;
const solution1 = [[7], [4, 3], [3, 2, 2]];

const calculatedSolution1 = getSubarrays(exampleInput1, desiredSum1);

console.log(
  `Example Input #1: ${JSON.stringify(exampleInput1)}, Desired Sum: ${desiredSum1}, Solution: ${JSON.stringify(
    calculatedSolution1
  )}`
);
assert.deepStrictEqual(calculatedSolution1, solution1);

// test case #2
const exampleInput2 = [23, 1, 6, 9, 15, 8];
const desiredSum2 = 24;
const solution2 = [
  [23, 1],
  [9, 15],
];

const calculatedSolution2 = getSubarrays(exampleInput2, desiredSum2);

console.log(
  `Example Input #2: ${JSON.stringify(exampleInput2)}, Desired Sum: ${desiredSum2}, Solution: ${JSON.stringify(
    calculatedSolution2
  )}`
);
assert.deepStrictEqual(calculatedSolution2, solution2);

// test case #3
// sliding window technique cannot handle negative numbers in this case so solution will not be full
const exampleInput3 = [-1, -4, 0, 5, 3, 2, 1];
const desiredSum3 = 5;
const solution3 = [[-1, -4, 0, 5, 3, 2], [5], [3, 2]];

const calculatedSolution3 = getSubarrays(exampleInput3, desiredSum3);

console.log(
  `Example Input #3: ${JSON.stringify(exampleInput3)}, Desired Sum: ${desiredSum3}, Solution (some missing): ${JSON.stringify(
    calculatedSolution3
  )}`
);
assert.notDeepStrictEqual(calculatedSolution3, solution3);
