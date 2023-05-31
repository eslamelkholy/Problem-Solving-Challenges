/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = buildGraph(edges);
  const queue = [source];
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    if (currentNode === destination) return true;

    for (const neighbour of graph[currentNode]) {
      queue.push(neighbour);
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
