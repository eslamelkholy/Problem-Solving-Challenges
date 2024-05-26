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
    if (!dfs(seeing, visited, i + "", graph)) return false;
  }

  return true;
};

const dfs = (seeing, visited, node, graph) => {
  if (visited.has(node)) return true;
  if (seeing.has(node)) return false;
  seeing.add(node);

  for (const currentNode of graph[node]) {
    if (!dfs(seeing, visited, currentNode, graph)) return false;
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
