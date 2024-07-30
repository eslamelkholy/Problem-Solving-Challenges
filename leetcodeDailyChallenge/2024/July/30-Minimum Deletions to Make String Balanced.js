/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const N = s.length;
  const countA = new Array(N);
  const countB = new Array(N);
  let bCount = 0;
  let aCount = 0;
  let minDeletion = N;

  // First pass: compute count_b which stores the number of
  for (let i = 0; i < N; i++) {
    countB[i] = bCount;

    if (s[i] === "b") bCount++;
  }

  // Second pass: compute count_a which stores the number of
  for (let i = N - 1; i >= 0; i--) {
    countA[i] = aCount;

    if (s[i] === "a") aCount++;
  }

  for (let i = 0; i < N; i++) {
    minDeletion = Math.min(minDeletion, countA[i] + countB[i]);
  }

  return minDeletion;
};
