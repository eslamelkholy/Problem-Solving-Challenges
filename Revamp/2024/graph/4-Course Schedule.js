/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visited = new Set();
  const seeing = new Set();
  const graph = buildGraph(numCourses, prerequisites);

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(graph, visited, seeing, i)) return false;
  }

  return true;
};

const dfs = (graph, visited, seeing, node) => {
  if (seeing.has(node)) return false;
  if (visited.has(node)) return true;

  seeing.add(node);

  for (const currentNode of graph[node]) {
    if (!dfs(graph, visited, seeing, currentNode)) return false;
  }

  seeing.delete(node);
  visited.add(node);

  return true;
};

const buildGraph = (N, edges) => {
  const graph = {};
  for (let i = 0; i < N; i++) graph[i] = [];

  for (const [x, y] of edges) {
    graph[x].push(y);
  }

  return graph;
};

console.log(canFinish((numCourses = 2), (prerequisites = [[1, 0]])));
console.log(
  canFinish(
    (numCourses = 2),
    (prerequisites = [
      [1, 0],
      [0, 1],
    ])
  )
);

console.log(
  canFinish(
    (numCourses = 4),
    (prerequisites = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ])
  )
);
