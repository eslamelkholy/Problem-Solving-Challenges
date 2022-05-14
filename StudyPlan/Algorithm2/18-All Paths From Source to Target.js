/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (grid) {
  const graph = buildGraph(grid);
  const source = 0;
  const target = grid.length - 1;
  const queue = [[source, []]];
  const result = [];

  while (queue.length > 0) {
    const [currentNode, distance] = queue.shift();
    if (currentNode === target) {
      result.push([...distance, target]);
    }

    for (const neighbor of graph[currentNode]) {
      queue.push([neighbor, [...distance, currentNode]]);
    }
  }

  return result;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    graph[i] = [];
    for (let j = 0; j < edges[i].length; j++) {
      graph[i].push(edges[i][j]);
    }
  }

  return graph;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
