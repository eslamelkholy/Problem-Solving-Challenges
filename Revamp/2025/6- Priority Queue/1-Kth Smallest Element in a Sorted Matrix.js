/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const minPQ = new MinPriorityQueue();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      minPQ.enqueue(matrix[i][j]);
    }
  }
  while (k > 1) {
    minPQ.dequeue();
    k--;
  }

  return minPQ.dequeue();
};
