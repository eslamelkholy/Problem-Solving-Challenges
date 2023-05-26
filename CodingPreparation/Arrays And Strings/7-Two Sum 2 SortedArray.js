/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const total = numbers[leftPointer] + numbers[rightPointer];

    if (total === target) return [leftPointer + 1, rightPointer + 1];

    if (total > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return [-1, -1];
};

console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
console.log(twoSum((numbers = [-1, 0]), (target = -1)));
