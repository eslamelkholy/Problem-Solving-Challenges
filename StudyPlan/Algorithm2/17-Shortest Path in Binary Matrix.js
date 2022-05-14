/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const graph = buildGraph(grid);
  const start = '0,0';
  const target = grid.length - 1 + ',' + (grid[grid.length - 1].length - 1);
  const visited = new Set([start]);
  const queue = [[start, 1]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    let [x, y] = node.split(',');
    x = parseInt(x);
    y = parseInt(y);
    if (graph[node] === undefined || grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 1) continue;

    if (node === target) return distance;

    for (const neighbor of graph[node]) {
      if (visited.has(neighbor)) continue;

      visited.add(neighbor);
      queue.push([neighbor, distance + 1]);
    }
  }
  return -1;
};

/**
 *
 * @param {[[]]} grid
 * @returns {Object} graph
 */
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
