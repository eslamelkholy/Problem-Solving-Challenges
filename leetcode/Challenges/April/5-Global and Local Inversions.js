/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function (A) {
  let globalInversions = 0;
  let localInversions = 0;
  for (let i = 0; i < A.length; i++) if (A[i] > A[i + 1]) localInversions++;

  for (let i = 0; i < A.length; i++) for (let j = i + 1; j < A.length; j++) if (A[i] > A[j]) globalInversions++;
  return globalInversions === localInversions;
};

console.log(isIdealPermutation([1, 0, 2]));
console.log(isIdealPermutation([1, 2, 0]));
