const assert = require('assert');

/**
 * @param {string} inputArr
 * @param {string} subarraySize
 * @return {number[]}
 */
function getMaxSubarray(inputArr, subarraySize) {
  let maxSum = 0;
  let currentSum = 0;
  let maxSubArray;
  let left = 0;
  let right = 0;

  while (right < inputArr.length) {
    currentSum += inputArr[right];
    // Window Reaches the Target
    if (right - left === subarraySize - 1) {
      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSubArray = inputArr.slice(left, right + 1);
      }

      currentSum -= inputArr[left];
      left++;
    }

    right++;
  }

  return maxSubArray;
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [-1, 2, 3, 0, -3, 9];
const subarraySize1 = 2;
const solution1 = [-3, 9];

const calculatedSolution1 = getMaxSubarray(exampleInput1, subarraySize1);

console.log(
  `Example Input #1: ${JSON.stringify(exampleInput1)}, Subarray Size: ${subarraySize1}, Solution: ${JSON.stringify(
    calculatedSolution1
  )}`
);
assert.deepStrictEqual(calculatedSolution1, solution1);

// test case #2
const exampleInput2 = [6, 0, -1, 2, 1, -3, 4];
const subarraySize2 = 3;
const solution2 = [6, 0, -1];

const calculatedSolution2 = getMaxSubarray(exampleInput2, subarraySize2);

console.log(
  `Example Input #2: ${JSON.stringify(exampleInput2)}, Subarray Size: ${subarraySize2}, Solution: ${JSON.stringify(
    calculatedSolution2
  )}`
);
assert.deepStrictEqual(calculatedSolution2, solution2);

// test case #3
const exampleInput3 = [6, -3, -5, 1, 2, 0, 4];
const subarraySize3 = 4;
const solution3 = [1, 2, 0, 4];

const calculatedSolution3 = getMaxSubarray(exampleInput3, subarraySize3);

console.log(
  `Example Input #3: ${JSON.stringify(exampleInput3)}, Subarray Size: ${subarraySize3}, Solution: ${JSON.stringify(
    calculatedSolution3
  )}`
);
assert.deepStrictEqual(calculatedSolution3, solution3);
