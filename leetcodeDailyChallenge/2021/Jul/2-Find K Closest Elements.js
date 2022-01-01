/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (rightPointer - leftPointer >= k) {
    // a-x <= b-x (Comparison Law at the Question)
    if (Math.abs(arr[leftPointer] - x) <= Math.abs(arr[rightPointer] - x)) rightPointer--;
    else leftPointer++;
  }
  return arr.slice(leftPointer, rightPointer + 1);
};

// console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // [1,2,3,4]
// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1,2,3,4]
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)); // [1,2,3,4]
