/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const reacableNodes = new Set();
  const unReachableNodes = [];

  for (const [_, nodeVal] of edges) reacableNodes.add(nodeVal);

  for (let i = 0; i < n; i++) if (!reacableNodes.has(i)) unReachableNodes.push(i);

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
