/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const MID = nums.length / 2;
  const leftSide = sortArray(nums.slice(0, MID));
  const rightSide = sortArray(nums.slice(MID, nums.length));

  return mergeSort(leftSide, rightSide);
};

const mergeSort = (leftArr, rightArr) => {
  let leftPointer = 0;
  let rightPointer = 0;
  const result = [];

  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      result.push(leftArr[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightArr[rightPointer]);
      rightPointer++;
    }
  }

  // Push the rest
  result.push(...leftArr.slice(leftPointer, leftArr.length));
  result.push(...rightArr.slice(rightPointer, rightArr.length));
  return result;
};
