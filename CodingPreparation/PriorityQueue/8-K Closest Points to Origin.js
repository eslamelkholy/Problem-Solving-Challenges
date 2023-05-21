const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const minPQ = new MinPriorityQueue({ priority: (diff) => diff });
  const result = [];

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    minPQ.enqueue(i, distance);
  }

  while (k-- > 0) {
    result.push(points[minPQ.dequeue().element]);
  }

  return result;
};
console.log(
  kClosest(
    (points = [
      [1, 3],
      [-2, 2],
    ]),
    (k = 1)
  )
);
