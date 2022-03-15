const minimumIsland = (grid) => {
  const visited = new Set();
  let minimumIslandSize = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const size = dfs(grid, visited, i, j);
      if (!size) continue;

      minimumIslandSize = Math.min(size, minimumIslandSize);
    }
  }

  return minimumIslandSize;
};

const dfs = (grid, visited, row, col) => {
  const position = `${row}-${col}`;
  if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 'W' || visited.has(position)) return false;

  visited.add(position);

  let size = 1;
  size += dfs(grid, visited, row + 1, col);
  size += dfs(grid, visited, row - 1, col);
  size += dfs(grid, visited, row, col + 1);
  size += dfs(grid, visited, row, col - 1);

  return size;
};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2
