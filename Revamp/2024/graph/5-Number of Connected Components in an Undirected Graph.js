/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const graph = buildGraph(edges, n);
  const visited = new Set();
  let count = 0;

  for (const node in graph) {
    count += dfs(Number(node), graph, visited);
  }

  return count;
};

const dfs = (node, graph, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  for (const neighbor of graph[node]) {
    dfs(neighbor, graph, visited);
  }

  return 1;
};

const buildGraph = (edges, n) => {
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

console.log(
  countComponents(
    (n = 5),
    (edges = [
      [0, 1],
      [1, 2],
      [3, 4],
    ])
  )
);

console.log(
  countComponents(4, [
    [2, 3],
    [1, 2],
    [1, 3],
  ])
);
