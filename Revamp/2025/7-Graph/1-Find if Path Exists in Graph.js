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
    const current = stack.pop();

    if (current === destination) return true;
    if (visited.has(current)) continue;

    visited.add(current);

    for (const edge of graph[current]) {
      stack.push(edge);
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
