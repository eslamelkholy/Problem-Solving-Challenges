/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = buildGraph(edges);
  const visited = new Set();
  const stack = [source];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (visited.has(currentNode)) continue;

    visited.add(currentNode);
    if (currentNode === destination) return true;

    for (const neighbour of graph[currentNode]) {
      stack.push(neighbour);
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const [x, y] of edges) {
    if (graph[x] === undefined) graph[x] = [];
    if (graph[y] === undefined) graph[y] = [];

    graph[x].push(y);
    graph[y].push(x);
  }

  return graph;
};
