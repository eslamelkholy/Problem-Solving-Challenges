const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const minPQ = new MinPriorityQueue({ priority: (stone) => stone });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      minPQ.enqueue(matrix[i][j]);
    }
  }

  for (let i = 0; i < k - 1; i++) {
    minPQ.dequeue();
  }
  return minPQ.dequeue().element;
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);
