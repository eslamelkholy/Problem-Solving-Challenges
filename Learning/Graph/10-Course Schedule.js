/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(prerequisites, numCourses);
  const visited = new Set();
  const seeing = new Set();

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(graph, i + '', visited, seeing)) {
      return false;
    }
  }

  return true;
};

const dfs = (graph, node, visited, seeing) => {
  if (visited.has(node)) return true;
  if (seeing.has(node)) return false;
  seeing.add(node);

  for (const currentNode of graph[node]) {
    if (!dfs(graph, currentNode, visited, seeing)) return false;
  }

  seeing.delete(node);
  visited.add(node);

  return true;
};

const buildGraph = (edges, numCourses) => {
  const graph = [...Array(numCourses)].map((r) => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
  }
  return graph;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);

console.log(
  canFinish(20, [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ])
);
