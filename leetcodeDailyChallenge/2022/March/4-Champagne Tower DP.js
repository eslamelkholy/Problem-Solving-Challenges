/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  let currRow = new Array(100).fill(0);
  currRow[0] = poured;

  for (let i = 0; i < query_row; i++) {
    const nextRow = new Array(100).fill(0);

    for (let j = 0; j < 100; j++) {
      if (currRow[j] > 1) {
        const rem = currRow[j] - 1;
        currRow[j] = 1;
        const half = rem / 2;
        nextRow[j] += half;
        nextRow[j + 1] += half;
      }
    }

    currRow = nextRow;
  }

  return Math.min(1, currRow[query_glass]);
};
