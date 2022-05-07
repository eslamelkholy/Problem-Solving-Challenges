/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rowToSearch = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix[i].length - 1] >= target) {
      rowToSearch = i;
      break;
    }
  }
  const row = matrix[rowToSearch];
  let left = 0;
  let right = row.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentVal = row[mid];

    if (currentVal === target) return true;

    if (currentVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
