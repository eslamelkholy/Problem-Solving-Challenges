const FRESH = 1;
const ROTTEN = 2;
const EMPTY = 0;
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (!hasFresh(grid)) return 0;
  const visited = new Set();
  let hasRotten = findRotten(grid, visited);
  let steps = -1;

  while (hasRotten.length !== 0) {
    for (let i = 0; i < hasRotten.length; i++) {
      let [x, y] = hasRotten[i].split("-");
      x = parseInt(x);
      y = parseInt(y);

      makeitRotten(grid, x + 1, y);
      makeitRotten(grid, x - 1, y);
      makeitRotten(grid, x, y + 1);
      makeitRotten(grid, x, y - 1);
    }
    steps++;
    hasRotten = findRotten(grid, visited);
  }

  return hasFresh(grid) ? -1 : steps;
};

const findRotten = (grid, visited) => {
  const result = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const position = i + "-" + j;
      if (grid[i][j] === ROTTEN && !visited.has(position)) {
        visited.add(position);
        result.push(i + "-" + j);
      }
    }
  }
  return result;
};

const makeitRotten = (grid, x, y) => {
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === EMPTY)
    return;
  grid[x][y] = ROTTEN;
};

const hasFresh = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === FRESH) return true;
    }
  }
  return false;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);

console.log(orangesRotting([[0, 2]]));
console.log(orangesRotting([[0]]));
