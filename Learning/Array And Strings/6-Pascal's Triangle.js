/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const currentLevel = [1]; // i = 2
    for (let j = 1; j < i; j++) {
      const sum = result[i - 1][j - 1] + result[i - 1][j];
      currentLevel.push(sum);
    }

    currentLevel.push(1);
    result.push(currentLevel);
  }

  return result;
};
