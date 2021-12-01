/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let smallestManhattan = Number.MAX_SAFE_INTEGER;
  let manhattanIndex = -1;
  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    const calculatedManhattan = Math.abs(x - point[0]) + Math.abs(y - point[1]);
    if (calculatedManhattan < smallestManhattan && (y === point[1] || x === point[0])) {
      smallestManhattan = calculatedManhattan;
      manhattanIndex = i;
    }
  }

  return manhattanIndex;
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
);
