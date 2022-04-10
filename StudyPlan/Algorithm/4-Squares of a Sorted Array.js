/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquaresStraighForward = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.pow(nums[i], 2));
  }

  return result.sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
  const result = [];
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const leftPow = Math.pow(nums[leftPointer], 2);
    const rightPow = Math.pow(nums[rightPointer], 2);
    if (leftPow > rightPow) {
      result.push(leftPow);
      leftPointer++;
    } else {
      result.push(rightPow);
      rightPointer--;
    }
  }

  return result.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
