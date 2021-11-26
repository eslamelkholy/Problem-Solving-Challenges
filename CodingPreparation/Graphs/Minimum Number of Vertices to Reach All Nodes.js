/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const reacableNodes = new Set();
  const unReachableNodes = [];

  for (const edge of edges) reacableNodes.add(edge[1]);

  for (let i = 0; i < n; i++) {
    if (!reacableNodes.has(i)) unReachableNodes.push(i);
  }

  return unReachableNodes;
};

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);
