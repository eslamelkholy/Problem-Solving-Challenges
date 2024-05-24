/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const minPQ = new MinPriorityQueue({ priority: (element) => element });
  const result = [];

  for (const [x, y] of points) {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    minPQ.enqueue([x, y], distance);
  }

  while (k > 0) {
    result.push(minPQ.dequeue().element);
    k--;
  }

  return result;
};
