/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */

/**
 * Workflow Using Tarjan's Bridge-Finding Algorithm (TBFA).
 * TBFA is a bit like a combination of a depth-first search (DFS) approach with recursion
 */
var criticalConnections = function (n, connections) {
  const connectedNodes = {}; // each value array of each adjacent node
  const discoveryTime = new Uint32Array(n);
  const lowestFutureNode = new Uint32Array(n);
  const result = [];
  let time = 1;

  for (let i = 0; i < n; i++) connectedNodes[i] = [];
  for (const [node1, node2] of connections) {
    connectedNodes[node1].push(node2);
    connectedNodes[node2].push(node1);
  }

  const dfs = (curr, prev) => {
    discoveryTime[curr] = lowestFutureNode[curr] = time++;

    for (let next of connectedNodes[curr]) {
      if (!discoveryTime[next]) {
        dfs(next, curr);
        lowestFutureNode[curr] = Math.min(lowestFutureNode[curr], lowestFutureNode[next]);
      } else if (next !== prev) lowestFutureNode[curr] = Math.min(lowestFutureNode[curr], discoveryTime[next]);
      if (lowestFutureNode[next] > discoveryTime[curr]) result.push([curr, next]);
    }
  };
  dfs(0, -1);
  return result;
};

console.log(
  criticalConnections(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ])
);
