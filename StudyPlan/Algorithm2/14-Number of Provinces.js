/**
 * @param {number[][]} M
 * @return {number}
 */
function findCircleNum(M) {
  const visited = new Set();
  let circles = 0;

  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      circles++;
    }
  }

  return circles;

  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  }
}
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
