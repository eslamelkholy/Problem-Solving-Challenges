/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = buildGraph(edges);
  const stack = [source];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) continue;

    visited.add(node);

    if (node === destination) return true;

    for (const neighbor of graph[node]) {
      stack.push(neighbor);
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
