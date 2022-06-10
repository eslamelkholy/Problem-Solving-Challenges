/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer];

    if (sum === target) return [leftPointer + 1, rightPointer + 1];

    if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
