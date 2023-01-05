/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let shots = 1;
  let xEnd = points[0][1];

  for (const [x, y] of points) {
    if (x > xEnd) {
      xEnd = y;
      shots++;
    }
  }

  return shots;
};
