/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = buildGraph(n, edges);
  const stack = [source];
  const visited = new Set();

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    if (currentNode === destination) return true;

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const buildGraph = (n, edges) => {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }
  return graph;
};
