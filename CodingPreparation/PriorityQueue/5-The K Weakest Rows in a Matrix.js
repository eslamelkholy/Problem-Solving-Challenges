const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const soldiersPerRow = {};

  for (let i = 0; i < mat.length; i++) {
    soldiersPerRow[i] = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) soldiersPerRow[i]++;
    }
  }

  return Object.keys(soldiersPerRow)
    .sort((a, b) => soldiersPerRow[a] - soldiersPerRow[b])
    .slice(0, k)
    .map((soldier) => parseInt(soldier));
};

console.log(
  kWeakestRows(
    (mat = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ]),
    (k = 3)
  )
);

console.log(
  kWeakestRows(
    (mat = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ]),
    (k = 2)
  )
);
