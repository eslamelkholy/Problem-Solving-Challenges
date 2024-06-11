/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const N = arr2.length;
  let indexMap = {};
  for (let i = 0; i < N; i++) {
    indexMap[arr2[i]] = i;
  }

  arr1.sort((a, b) => {
    a = indexMap[a] !== undefined ? indexMap[a] : a + N;
    b = indexMap[b] !== undefined ? indexMap[b] : b + N;
    return a - b;
  });

  return arr1;
};
