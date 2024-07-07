// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */
// var canFinish = function (numCourses, prerequisites) {
//   const graph = buildGraph(numCourses, prerequisites);
//   const visited = new Set();
//   const seeing = new Set();

//   for (let i = 0; i < numCourses; i++) {
//     if (!dfs(graph, visited, seeing, i)) return false;
//   }

//   return true;
// };

// const dfs = (graph, visited, seeing, currentNode) => {
//   if (visited.has(currentNode)) return true;
//   if (seeing.has(currentNode)) return false;

//   seeing.add(currentNode);

//   for (const neighbor of graph[currentNode]) {
//     if (!dfs(graph, visited, seeing, neighbor)) return false;
//   }

//   seeing.delete(currentNode);
//   visited.add(currentNode);

//   return true;
// };

// const buildGraph = (numCourses, prerequisites) => {
//   const graph = {};
//   for (let i = 0; i < numCourses; i++) {
//     graph[i] = [];
//   }

//   for (const [x, y] of prerequisites) {
//     graph[x].push(y);
//   }

//   return graph;
// };

// The previous is course schedule problem similar to build order
// https://leetcode.com/problems/course-schedule/

const buildOrder = (projects, dependencies) => {
  const graph = buildGraph(projects, dependencies);

  for (const project of projects) {
    const result = dfs(graph, new Set(), project, []);
    console.log("Result = ", result);
  }

  return true;
};

const dfs = (graph, visited, currentNode, currentPath) => {
  if (visited.has(currentNode)) return currentNode;

  visited.add(currentNode);
  currentPath.push(currentNode);

  console.log("Current path", currentPath);

  for (const neighbor of graph[currentNode]) {
    dfs(graph, visited, neighbor, currentPath);
  }

  return currentPath;
};

const buildGraph = (projects, dependencies) => {
  const graph = {};
  for (const project of projects) {
    graph[project] = [];
  }

  for (const [x, y] of dependencies) {
    graph[x].push(y);
  }

  return graph;
};

console.log(
  buildOrder(
    ["a", "b", "c", "d", "e", "f"],
    [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
    ]
  )
);

// TODO: To be solve using topological sort
