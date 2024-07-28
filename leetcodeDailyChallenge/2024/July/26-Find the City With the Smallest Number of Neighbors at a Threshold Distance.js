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
  const queue = [[node, 0, new Set()]];
  let numberOfVisistedNodes = 0;
  const markedVisited = new Set();

  while (queue.length > 0) {
    const [currentNode, distance, visited] = queue.shift();

    if (distance > distanceThreshold || visited.has(currentNode)) continue;

    if (!markedVisited.has(currentNode)) {
      numberOfVisistedNodes++;
    }
    visited.add(currentNode);
    markedVisited.add(currentNode);

    for (const neighbor in graph[currentNode]) {
      queue.push([neighbor, distance + graph[currentNode][neighbor], new Set(visited)]);
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
