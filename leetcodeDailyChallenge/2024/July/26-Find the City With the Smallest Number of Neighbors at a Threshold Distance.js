const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const graph = buildGraph(edges);
  let minDistance = Number.MAX_SAFE_INTEGER;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const neighborDistance = bfs(i + "", graph, distanceThreshold);
    if (neighborDistance <= minDistance) {
      minDistance = neighborDistance;
      result = i;
    }
  }

  return result;
};

const bfs = (node, graph, distanceThreshold) => {
  const minPQ = new MinPriorityQueue({ priority: (val) => val.distance });
  minPQ.enqueue({ currentNode: node, distance: 0 });
  const visited = new Set();
  let numberOfVisistedNodes = 0;

  while (minPQ.size() > 0) {
    const { currentNode, distance } = minPQ.dequeue().element;

    if (distance > distanceThreshold || visited.has(currentNode)) continue;
    visited.add(currentNode);
    numberOfVisistedNodes++;

    for (const neighbor in graph[currentNode]) {
      minPQ.enqueue({ currentNode: neighbor, distance: distance + graph[currentNode][neighbor] });
    }
  }

  return numberOfVisistedNodes;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [from, to, weight] of edges) {
    if (graph[from] === undefined) graph[from] = {};
    if (graph[to] === undefined) graph[to] = {};

    graph[from][to] = weight;
    graph[to][from] = weight;
  }

  return graph;
};
console.log(
  findTheCity(
    (n = 6),
    (edges = [
      [0, 1, 10],
      [0, 2, 1],
      [2, 3, 1],
      [1, 3, 1],
      [1, 4, 1],
      [4, 5, 10],
    ]),
    (distanceThreshold = 20)
  )
);

console.log(
  findTheCity(
    (n = 4),
    (edges = [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ]),
    (distanceThreshold = 4)
  )
);
