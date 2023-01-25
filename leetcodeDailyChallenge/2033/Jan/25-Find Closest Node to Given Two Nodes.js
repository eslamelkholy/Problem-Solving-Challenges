/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  const graph = buildGraph(edges);
  const map1 = bfs(node1, graph);
  const map2 = bfs(node2, graph);
  let minimumDistance = Infinity;
  let result = -1;

  for (const key in map1) {
    if (map2[key] === undefined) continue;

    const max = Math.max(map1[key], map2[key]);
    if (max < minimumDistance) {
      result = key;
      minimumDistance = max;
    }
  }

  return result;
};

const bfs = (node1, graph) => {
  const queue = [{ node: node1, distance: 0 }];
  const map = {};
  const visited = new Set();

  while (queue.length > 0) {
    const { node, distance } = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    map[node] = distance;

    if (graph[node] === undefined) continue;

    queue.push({ node: graph[node], distance: distance + 1 });
  }
  return map;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === -1) continue;

    graph[i] = edges[i];
  }

  return graph;
};
console.log(closestMeetingNode([2, 0, 0], 2, 0));
console.log(closestMeetingNode([4, 4, 4, 5, 1, 2, 2], 1, 1));
// console.log(closestMeetingNode([5, -1, 3, 4, 5, 6, -1, -1, 4, 3], 0, 0));
// console.log(closestMeetingNode((edges = [2, 2, 3, -1]), (node1 = 0), (node2 = 1)));
// console.log(closestMeetingNode((edges = [1, 2, -1]), (node1 = 0), (node2 = 2)));
