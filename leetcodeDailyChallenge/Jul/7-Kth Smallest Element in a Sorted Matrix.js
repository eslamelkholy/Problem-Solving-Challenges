var kthSmallest = function (matrix, k) {
  const allElementsin1DArray = [];
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix.length; j++) allElementsin1DArray.push(matrix[i][j]);

  return allElementsin1DArray.sort((a, b) => a - b)[k - 1];
};

const kthSmallest = (matrix, k) => [].concat(...matrix).sort((a, b) => a - b)[k - 1];

/**
 * This My Solution Explanation Link
 * https://leetcode.com/discuss/explore/july-leetcoding-challenge-2021/1322141/Day7%3A-Kth-Smallest-Element-in-a-Sorted-Matrix-Javascript-Simple-Solution
 */
