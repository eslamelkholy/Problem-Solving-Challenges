/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const result = [];
  const maxPQ = new MinPriorityQueue({ priority: (priority) => priority });

  for (let i = 0; i < points.length; i++) {
    const distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
    maxPQ.enqueue(i, distance);
  }

  while (k-- > 0) {
    result.push(points[maxPQ.dequeue().element]);
  }

  return result;
};
