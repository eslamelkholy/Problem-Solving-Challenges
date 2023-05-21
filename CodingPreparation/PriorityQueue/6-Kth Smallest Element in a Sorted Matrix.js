const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const minPQ = new MinPriorityQueue({ priority: (diff) => diff });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      minPQ.enqueue(matrix[i][j]);
    }
  }

  for (let i = 1; i < k; i++) {
    minPQ.dequeue();
  }

  return minPQ.dequeue().element;
};

console.log(
  kthSmallest(
    (matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ]),
    (k = 8)
  )
);
