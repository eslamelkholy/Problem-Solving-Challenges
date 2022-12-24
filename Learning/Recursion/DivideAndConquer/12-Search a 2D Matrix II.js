/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (const nums of matrix) {
    if (binarySearch(nums, target)) return true;
  }

  return false;
};

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const N = matrix.length;
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < N && col >= 0) {
    if (matrix[row][col] === target) return true;

    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};
