const assert = require('assert');

/**
 * @param {string} inputString - Any string.
 * @param {string} characters - A string of characters that the substring should contain.
 * @returns {string} - The shortest substring containing all the desired characters.
 */
function getShortestSubstring(inputString, characters) {
  let left = 0;
  let right = 0;
  let minimumSubString = inputString;
  const currentWindowMap = {};
  const charsMap = {};

  for (const char of characters) {
    charsMap[char] ? charsMap[char]++ : (charsMap[char] = 1);
  }

  while (right < inputString.length) {
    const char = inputString[right];
    currentWindowMap[char] ? currentWindowMap[char]++ : (currentWindowMap[char] = 1);

    while (compareFrequency(charsMap, currentWindowMap)) {
      const currentWindowLength = right - left + 1;
      if (currentWindowLength < minimumSubString.length) {
        minimumSubString = inputString.slice(left, right + 1);
      }

      if (currentWindowMap[inputString[left]]) currentWindowMap[inputString[left]]--;
      left++;
    }

    right++;
  }

  return minimumSubString;
}

/**
 * @param {object} map1
 * @param {object} map2
 * @returns {boolean}
 */
const compareFrequency = (map1, map2) => {
  for (const key in map1) {
    if (map2[key] < map1[key] || map2[key] === undefined) return false;
  }

  return true;
};

/**
 * Tests
 */

// test case #1
const exampleInput1 = 'a93kdabc991cba35fg';
const desiredCharacters1 = 'abcabc';
const solution1 = 'abc991cba';

const calculatedSolution1 = getShortestSubstring(exampleInput1, desiredCharacters1);

console.log(`Example Input #1: ${exampleInput1}, Desired Characters: ${desiredCharacters1}, Solution: ${calculatedSolution1}`);
assert.deepStrictEqual(calculatedSolution1, solution1);

// test case #2
const exampleInput2 = 'asb2.9d/d!304#b$%^%!ksd,2294iubasdmc';
const desiredCharacters2 = 'b$#2';
const solution2 = '#b$%^%!ksd,2';

const calculatedSolution2 = getShortestSubstring(exampleInput2, desiredCharacters2);

console.log(`Example Input #2: ${exampleInput2}, Desired Characters: ${desiredCharacters2}, Solution: ${calculatedSolution2}`);
assert.deepStrictEqual(calculatedSolution2, solution2);

// test case #3
const exampleInput3 = 'xad9dk0293nc';
const desiredCharacters3 = 'xd3';
const solution3 = 'xad9dk0293';

const calculatedSolution3 = getShortestSubstring(exampleInput3, desiredCharacters3);

console.log(`Example Input #3: ${exampleInput3}, Desired Characters: ${desiredCharacters3}, Solution: ${calculatedSolution3}`);
assert.deepStrictEqual(calculatedSolution3, solution3);

// test case #4
const exampleInput4 = 'gho8cbb';
const desiredCharacters4 = 'bob';
const solution4 = 'o8cbb';

const calculatedSolution4 = getShortestSubstring(exampleInput4, desiredCharacters4);

console.log(`Example Input #4: ${exampleInput4}, Desired Characters: ${desiredCharacters4}, Solution: ${calculatedSolution4}`);
assert.deepStrictEqual(calculatedSolution4, solution4);
