/**
 * @param {number[][]} matrix
 */
class NumMatrix0 {
  constructor(matrix) {
    this.matrix = matrix;
  }
  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }

    return sum;
  }
}

/**
 * @param {number[][]} matrix
 */
class NumMatrix {
  constructor(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    this.dp = [];

    for (let i = 0; i < M; i++) {
      this.dp[i] = Array(N).fill(0);
      for (let j = 0; j < N; j++) {
        this.dp[i][j + 1] = this.dp[i][j] + matrix[i][j];
      }
    }
  }
  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    let sum = 0;
    for (let row = row1; row <= row2; row++) {
      sum += this.dp[row][col2 + 1] - this.dp[row][col1];
    }

    return sum;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)
