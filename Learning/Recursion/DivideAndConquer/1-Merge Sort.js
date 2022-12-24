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

const mergeSort = (leftList, rightList) => {
  let leftPointer = 0;
  let rightPointer = 0;
  const result = [];

  while (leftPointer < leftList.length && rightPointer < rightList.length) {
    if (leftList[leftPointer] < rightList[rightPointer]) {
      result.push(leftList[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightList[rightPointer]);
      rightPointer++;
    }
  }
  result.push(...leftList.slice(leftPointer, leftList.length));
  result.push(...rightList.slice(rightPointer, rightList.length));

  return result;
};
