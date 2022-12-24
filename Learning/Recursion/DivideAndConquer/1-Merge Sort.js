/**
 * @param {number[]} nums
 * @return {number[]}
 */
var PesudoCode = function (nums) {
  /**
   * Steps
   * 1- Check if length <= 1 return
   * 2- get left side & right side of arr
   * 3- Call Function recursively
   *        leftSide =  sortArray(leftSide)
   *        rightSide =  sortArray(rightSide)
   * 3- call merge with left & right merge(leftSide, rightSide)
   */
  /**
   * Merge Function Steps
   * 1- Set left & right Pointers
   * 2- While left pointer < left_list.length and right pointer < right list.length
   * 3- if(left_list[leftCursor]) < right_list[rightCursor] {
   *      result.push(left_list[leftCursor])
   *      left_cursor++;
   * 4- else {
   *      result.push(right_list[rightCursor])
   *      rightCursor++;
   * }
   *
   * 5-
   *      result.push(left_list[leftCursor to end])
   *      result.push(right_list[rightCursor to end])
   */
};

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
