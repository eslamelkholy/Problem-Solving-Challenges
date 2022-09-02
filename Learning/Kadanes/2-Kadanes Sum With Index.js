const kadaneRunning = (runningSum) => {
    let maxSum = runningSum[0];
    let currentSum = 0;
  
    let startIndex = 0;
    let endIndex = 0;
  
    for (let i = 0; i < runningSum.length; i++) {
      const num = runningSum[i];
      currentSum = currentSum + num;
  
      if (currentSum < num) {
        startIndex = i;
        currentSum = num;
      }
  
      if (maxSum < currentSum) {
        endIndex = i;
        maxSum = currentSum;
      }
    }
  
    return [maxSum, startIndex, endIndex];
  };
  