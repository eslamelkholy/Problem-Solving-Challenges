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
    const currentNode = stack.pop();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    if (currentNode === destination) return true;

    for (const neightbor of graph[currentNode]) {
      stack.push(neightbor);
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

console.log(
  validPath(
    (n = 3),
    (edges = [
      [0, 1],
      [1, 2],
      [2, 0],
    ]),
    (source = 0),
    (destination = 2)
  )
);

console.log(
  validPath(
    (n = 6),
    (edges = [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ]),
    (source = 0),
    (destination = 5)
  )
);
