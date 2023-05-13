/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    const currentRow = [1];

    for (let j = 1; j < i; j++) {
      const sum = result[i - 1][j - 1] + result[i - 1][j];
      currentRow.push(sum);
    }
    currentRow.push(1);
    result.push(currentRow);
  }

  return result[rowIndex];
};
