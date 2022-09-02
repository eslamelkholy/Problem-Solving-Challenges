const kadaneRunning = (runningSum, k) => {
    let maxSum = runningSum[0];
    let currentSum = 0;
  
    for (let i = 0; i < runningSum.length; i++) {
      const num = runningSum[i];
      currentSum = currentSum + num;
  
      if (currentSum < num) {
        currentSum = num;
      }
  
      if (maxSum < currentSum) {
        maxSum = currentSum;
      }
      if (maxSum === k) return maxSum;
    }
  
    return maxSum;
  };
  
  /**
   * @param {number[][]} matrix
   * @param {number} k
   * @return {number}
   */
  var maxSumSubmatrix = function (matrix, k) {
    let runningSum = new Array(matrix.length);
    let maxSumRect = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        runningSum.fill(0);
  
        // Right Pointer Loop
        for (let rightPointer = j; rightPointer < matrix[0].length; rightPointer++) {
          // Calculate Current Running Row Sum
          for (let runIndex = 0; runIndex < runningSum.length; runIndex++) {
            runningSum[runIndex] += matrix[runIndex][rightPointer];
          }
          const currentRectangleSum = kadaneRunning(runningSum, k);
          if (currentRectangleSum > maxSumRect && currentRectangleSum <= k) {
            maxSumRect = currentRectangleSum;
          }
        }
      }
    }
    return maxSumRect;
  };
  
  // console.log(
  //   maxSumSubmatrix(
  //     [
  //       [1, 0, 1],
  //       [0, -2, 3],
  //     ],
  //     2
  //   )
  // );
  
  // console.log(maxSumSubmatrix([[2, 2, -1]], 3));
  
  // console.log(maxSumSubmatrix([[2, 2, -1]], 0));
  console.log(
    maxSumSubmatrix(
      [
        [5, -4, -3, 4],
        [-3, -4, 4, 5],
        [5, 1, 5, -4],
      ],
      8
    )
  );
  // console.log(
  //   maxSumSubmatrix(
  //     [
  //       [5, -4, -3, 4],
  //       [-3, -4, 4, 5],
  //       [5, 1, 5, -4],
  //     ],
  //     10
  //   )
  // );
  