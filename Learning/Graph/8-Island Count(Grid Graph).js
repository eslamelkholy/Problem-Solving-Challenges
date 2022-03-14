const islandCount = (grid) => {
  const visited = new Set();
  let islandCounter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'W' || visited.has(i + '-' + j)) {
        continue;
      }
      dfs(grid, visited, i, j);
      islandCounter++;
    }
  }

  return islandCounter;
};

const dfs = (grid, visited, row, col) => {
  if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 'W') return;
  if (visited.has(row + '-' + col)) return;

  visited.add(row + '-' + col);

  dfs(grid, visited, row + 1, col);
  dfs(grid, visited, row - 1, col);
  dfs(grid, visited, row, col + 1);
  dfs(grid, visited, row, col - 1);
};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3
