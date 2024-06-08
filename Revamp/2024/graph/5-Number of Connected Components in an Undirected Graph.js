/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const graph = buildGraph(edges, n);
  const visited = new Set();
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (graph[i] === undefined) continue;

    if (hasPath(graph, visited, i)) sum++;
  }

  return sum;
};

const hasPath = (graph, visited, node) => {
  if (visited.has(node)) return false;

  visited.add(node);

  for (const neighbor of graph[node]) {
    hasPath(graph, visited, neighbor);
  }

  return true;
};

const buildGraph = (edges, N) => {
  const graph = {};
  for (let i = 0; i < N; i++) graph[i] = [];

  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  return graph;
};
