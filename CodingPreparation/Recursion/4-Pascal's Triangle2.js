/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const triangle = [[1], [1, 1]];

  for (let i = 2; i < rowIndex + 1; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      const sum = triangle[i - 1][j] + triangle[i - 1][j - 1];
      row.push(sum);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle[rowIndex];
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
