/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const soldiersMap = {};
  for (let i = 0; i < mat.length; i++) {
    let soldiers = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) soldiers++;
    }

    soldiersMap[i] = soldiers;
  }

  return Object.keys(soldiersMap)
    .sort((a, b) => soldiersMap[a] - soldiersMap[b])
    .slice(0, k)
    .map((soldier) => parseInt(soldier));
};
