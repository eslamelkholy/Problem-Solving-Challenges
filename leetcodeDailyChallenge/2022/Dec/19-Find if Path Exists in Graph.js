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

    if (currentNode === destination) return true;
    if (visited.has(currentNode)) continue;

    visited.add(currentNode);

    for (const neighbour of graph[currentNode]) {
      stack.push(neighbour);
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const [source, dest] of edges) {
    if (graph[source] === undefined) graph[source] = [];
    if (graph[dest] === undefined) graph[dest] = [];

    graph[source].push(dest);
    graph[dest].push(source);
  }

  return graph;
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

console.log(validPath(1, [], 0, 0));
