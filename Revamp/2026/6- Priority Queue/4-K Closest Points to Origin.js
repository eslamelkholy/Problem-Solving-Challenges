/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const results = [];
  const minPQ = new MinPriorityQueue((ele) => ele.distance);

  for (const [x, y] of points) {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    minPQ.enqueue({ path: [x, y], distance });
  }

  while (k > 0) {
    results.push(minPQ.dequeue().path);

    k--;
  }

  return results;
};
