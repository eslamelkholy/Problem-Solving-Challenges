/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (vals, edges) {
  const nodeWeightMap = {};
  const graph = buildGraph(edges);
  const visitedPaths = new Set();
  const N = vals.length;
  let numOfPaths = 0;

  for (let i = 0; i < vals.length; i++) {
    nodeWeightMap[i] = vals[i];
  }

  for (let i = 0; i < N; i++) {
    numOfPaths += traverse(i, graph, visitedPaths, nodeWeightMap);
  }

  return numOfPaths;
};

const traverse = (startNode, graph, visitedPaths, nodeWeightMap) => {
  const stack = [{ node: startNode, path: [startNode] }];
  const visited = new Set();
  let numOfPaths = 0;

  while (stack.length > 0) {
    const { node, path } = stack.pop();
    if (visited.has(node) || nodeWeightMap[node] > nodeWeightMap[startNode]) continue; //
    visited.add(node);

    if (nodeWeightMap[path[0]] === nodeWeightMap[path[path.length - 1]]) {
      const newPath = [...path].sort().join(",");
      if (!visitedPaths.has(newPath)) {
        numOfPaths++;
        visitedPaths.add(newPath);
        //console.log(node, path, " Path = ", newPath);
      }
    }

    for (const neighbor of graph[node] || []) {
      stack.push({ node: neighbor, path: [...path, neighbor] });
    }
  }
  return numOfPaths;
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

// console.log(
//   numberOfGoodPaths(
//     [
//       4, 8, 8, 13, 3, 9, 10, 13, 7, 17, 11, 8, 4, 5, 15, 11, 11, 15, 19, 12, 8, 20, 5, 10, 5, 3, 5, 17, 14, 19, 8, 8,
//       16, 20, 4, 13, 17, 16, 2, 16, 5, 1, 18, 2, 14, 14,
//     ],
//     [
//       [1, 0],
//       [1, 2],
//       [3, 2],
//       [4, 1],
//       [0, 5],
//       [1, 6],
//       [6, 7],
//       [0, 8],
//       [9, 2],
//       [0, 10],
//       [5, 11],
//       [12, 1],
//       [8, 13],
//       [14, 1],
//       [15, 9],
//       [4, 16],
//       [3, 17],
//       [18, 10],
//       [19, 13],
//       [20, 0],
//       [7, 21],
//       [8, 22],
//       [23, 9],
//       [24, 8],
//       [25, 20],
//       [21, 26],
//       [23, 27],
//       [28, 5],
//       [14, 29],
//       [30, 20],
//       [31, 22],
//       [32, 27],
//       [33, 0],
//       [9, 34],
//       [35, 4],
//       [36, 4],
//       [37, 33],
//       [30, 38],
//       [39, 11],
//       [40, 13],
//       [41, 21],
//       [42, 41],
//       [43, 37],
//       [44, 12],
//       [0, 45],
//     ]
//   )
// );

// console.log(
//   numberOfGoodPaths(
//     [3, 2, 1, 2, 5, 2, 4, 5, 1, 5],
//     [
//       [0, 1],
//       [1, 2],
//       [1, 3],
//       [4, 3],
//       [4, 5],
//       [6, 0],
//       [0, 7],
//       [8, 1],
//       [2, 9],
//     ]
//   )
// );

console.log(
  numberOfGoodPaths(
    (vals = [1, 3, 2, 1, 3]),
    (edges = [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ])
  )
);

// console.log(
//   numberOfGoodPaths(
//     (vals = [1, 1, 2, 2, 3]),
//     (edges = [
//       [0, 1],
//       [1, 2],
//       [2, 3],
//       [2, 4],
//     ])
//   )
// );
// console.log(numberOfGoodPaths((vals = [1]), (edges = [])));
