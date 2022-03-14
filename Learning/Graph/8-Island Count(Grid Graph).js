const islandCount = (grid) => {
  const visited = new Set();
  let islandCounter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dfs(grid, visited, i, j)) islandCounter++;
    }
  }

  return islandCounter;
};

const dfs = (grid, visited, row, col) => {
  const position = row + '-' + col;
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === 'W' ||
    visited.has(position)
  )
    return false;

  visited.add(position);

  dfs(grid, visited, row + 1, col);
  dfs(grid, visited, row - 1, col);
  dfs(grid, visited, row, col + 1);
  dfs(grid, visited, row, col - 1);

  return true;
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
