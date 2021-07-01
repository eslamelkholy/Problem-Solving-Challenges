/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (S, M, N) {
  let result = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
  for (let i = 0; i < S.length; i++) {
    let zeros = 0;
    let ones = 0;
    for (const char of S[i]) char === '1' ? ones++ : zeros++;
    for (let j = M; j >= zeros; j--)
      for (let k = N; k >= ones; k--) result[j][k] = Math.max(result[j][k], result[j - zeros][k - ones] + 1);
  }
  return result[M][N];
};

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3));
// console.log(findMaxForm(['10', '0', '1'], 1, 1));
// console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 4, 3));
// console.log(findMaxForm(['111', '1000', '1000', '1000'], 9, 3));
