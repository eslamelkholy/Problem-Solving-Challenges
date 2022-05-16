/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const graph = buildGraph(grid);
  const visited = new Set();
  const start = 0 + ',' + 0;
  const target = grid.length - 1 + ',' + (grid[grid.length - 1].length - 1);
  const queue = [[start, 1]];

  if (grid[grid.length - 1][grid[grid.length - 1].length - 1] === 1) return -1;

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === target) return distance;

    let [x, y] = node.split(',');
    if (grid[x] === undefined || grid[x][y] === undefined || graph[node] === undefined || grid[x][y] === 1) continue;

    for (const neighbor of graph[node]) {
      if (visited.has(neighbor)) continue;

      queue.push([neighbor, distance + 1]);
      visited.add(neighbor);
    }
  }

  return -1;
};

const buildGraph = (grid) => {
  const graph = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const position = i + ',' + j;
      graph[position] = [];
      graph[position].push(i + 1 + ',' + j);
      graph[position].push(i - 1 + ',' + j);
      graph[position].push(i + ',' + (j + 1));
      graph[position].push(i + ',' + (j - 1));

      graph[position].push(i + 1 + ',' + (j + 1));
      graph[position].push(i + 1 + ',' + (j - 1));
      graph[position].push(i - 1 + ',' + (j + 1));
      graph[position].push(i - 1 + ',' + (j - 1));
    }
  }

  return graph;
};

console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);

console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 1],
  ])
);
