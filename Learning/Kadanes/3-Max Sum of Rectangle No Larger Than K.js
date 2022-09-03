/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var maxSumSubmatrix = function (matrix, k) {
    const cols = matrix[0].length;
    const rows = matrix.length;
    let maxSumRect = Number.MIN_SAFE_INTEGER;
    const runningSum = new Array(rows).fill(0);
  
    for (let leftPointer = 0; leftPointer < cols; leftPointer++) {
      runningSum.fill(0); // Reset Running sum to Zero
      for (let rightPointer = leftPointer; rightPointer < cols; rightPointer++) {
        for (let k1 = 0; k1 < rows; k1++) {
          runningSum[k1] += matrix[k1][rightPointer];
        }
        // TODO: Use Kadanes
        maxSumRect = kadaneRunning(runningSum, k, maxSumRect);
      }
    }
    return maxSumRect;
  };
  
  const kadaneRunning = (runningSum, k, maxSumRect) => {
    let currSum = 0;
    const set = [0];
    for (let k1 = 0; k1 < runningSum.length; k1++) {
      currSum += runningSum[k1];
      for (const item of set) {
        const num = currSum - item;
        if (num <= k) {
          maxSumRect = Math.max(maxSumRect, num);
        }
      }
      set.push(currSum);
    }
    return maxSumRect;
  };
  