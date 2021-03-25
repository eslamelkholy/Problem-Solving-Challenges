/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  const result = [];
  const n = matrix.length;
  if (n === 0) return result;
  const m = matrix[0].length;
  if (m === 0) return result;

  // Initialize Array With False Values Then Mark Them As True
  const pc = Array(n)
    .fill(false)
    .map((x) => Array(m).fill(false));
  const at = Array(n)
    .fill(false)
    .map((x) => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    dfs(matrix, pc, i, 0, 0);
    dfs(matrix, at, i, m - 1, 0);
  }
  for (let j = 0; j < m; j++) {
    dfs(matrix, pc, 0, j, 0);
    dfs(matrix, at, n - 1, j, 0);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pc[i][j] && at[i][j]) result.push([i, j]);
    }
  }
  return result;
};

const dfs = (mat, visited, i, j, prev) => {
  if (i < 0 || j < 0 || i >= mat.length || j >= mat[0].length || visited[i][j] || mat[i][j] < prev) return;
  visited[i][j] = true;
  dfs(mat, visited, i + 1, j, mat[i][j]);
  dfs(mat, visited, i - 1, j, mat[i][j]);
  dfs(mat, visited, i, j + 1, mat[i][j]);
  dfs(mat, visited, i, j - 1, mat[i][j]);
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
