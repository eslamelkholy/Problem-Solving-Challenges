/**
 * Given Numbers And Return The Unique One
 * Test Cases Goes Here
 * 1- [4, 1, 2, 40, 4, 6, 1, 42, 2] // 42
 * 2- [2,2,1]  // 1
 * 3- [4,1,2,1,2] // 4
 */

var singleNumber = function (nums) {
  const numbers = numbersCount(nums);
  const uniqueNumber = findSingleNumber(numbers);
  return uniqueNumber;
};

const numbersCount = (nums) => {
  let numbers = {};
  nums.forEach((number) => (number in numbers ? numbers[number]++ : (numbers[number] = 1)));
  return numbers;
};

const findSingleNumber = (numsObject) => {
  let result = null;
  for (let [key, value] of Object.entries(numsObject)) {
    if (value === 1) {
      result = key;
      break;
    }
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
