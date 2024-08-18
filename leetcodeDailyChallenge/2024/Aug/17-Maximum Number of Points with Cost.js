/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let max = 0;

  for (let i = 0; i < points[0].length; i++) {
    const gainedPoints = maxPointsWithinRow(points, i);
    console.log(gainedPoints);
    max = Math.max(max, gainedPoints);
  }

  return max;
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPointsWithinRow = function (points, updatedMaxCol) {
  const N = points.length;
  const M = points[0].length;
  const maxDistance = new Array(N).fill(0).map(() => new Array(M).fill(0));
  let maxCol = 0;
  let maxVal = 0;
  let max = points[0][updatedMaxCol];
  let prevMax = 0;
  let original = updatedMaxCol;

  for (let i = 1; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      if (points[i][j] === 0) continue;
      const absVal = points[i][j] - Math.abs(updatedMaxCol - j);

      maxDistance[i][j] = absVal;
      if (absVal > maxVal) {
        maxVal = absVal;
        maxCol = j;
      }

      if (absVal === maxVal && points[i + 1] !== undefined) {
        const currentMax = Math.max(points[i + 1][j], (points[i + 1][j - 1] || 0) - 1, (points[i + 1][j + 1] || 0) - 1);
        if (currentMax >= prevMax) {
          maxVal = absVal;
          maxCol = j;
        }
      }

      if (points[i + 1] !== undefined)
        prevMax = Math.max(prevMax, points[i + 1][j], (points[i + 1][j - 1] || 0) - 1, (points[i + 1][j + 1] || 0) - 1);
    }
    updatedMaxCol = maxCol;
    if (original === 1) console.log("row = ", i, "Update col = ", updatedMaxCol);
    maxVal = 0;
    prevMax = 0;
  }
  if (original === 1) console.log(maxDistance);

  for (let i = 1; i < points.length; i++) {
    max += Math.max(...maxDistance[i]);
  }

  return max;
};

// console.log(
//   maxPoints([
//     [4, 1, 0, 4, 0],
//     [1, 0, 4, 0, 5],
//     [1, 3, 0, 4, 1],
//     [4, 4, 0, 4, 0],
//   ])
// );

// console.log(
//   maxPoints([
//     [0, 0],
//     [5, 3],
//     [2, 3],
//     [3, 3],
//   ])
// );

// console.log(
//   maxPoints([
//     [4, 0, 4, 2, 3],
//     [0, 0, 2, 2, 1],
//   ])
// );

// console.log(
//   maxPoints([
//     [4, 4, 2, 2, 1],
//     [5, 5, 2, 1, 2],
//     [3, 1, 5, 5, 2],
//     [3, 2, 0, 0, 3],
//   ])
// );

// console.log(
//   maxPoints([
//     [0, 0, 4, 1, 4],
//     [2, 1, 2, 0, 1],
//     [2, 2, 1, 3, 4],
//     [5, 2, 4, 5, 4],
//     [0, 5, 4, 2, 5],
//   ])
// );

// console.log(
//   maxPoints([
//     [1, 5],
//     [3, 2],
//     [4, 2],
//   ])
// );

console.log(
  maxPoints([
    [6, 8, 0, 4, 4, 3, 6],
    [9, 9, 10, 5, 7, 7, 7],
    [10, 3, 8, 7, 2, 10, 1],
    [4, 8, 10, 10, 9, 5, 1],
    [3, 10, 4, 3, 3, 2, 0],
    [0, 3, 7, 9, 1, 7, 6],
    [10, 9, 3, 6, 7, 6, 3],
    [2, 10, 0, 1, 6, 3, 2],
    [8, 7, 0, 8, 3, 1, 7],
  ])
);
