/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = [0];
  for (let i = 0; i <= n; i++) {
    const mask = 1 << (i - 1);
    for (let j = result.length - 1; j >= 0; j--) if (mask + result[j] >= 0) result.push(mask + result[j]);
  }
  return result;
};

console.log(grayCode(2));

var grayCode = function (n) {
  let result = [0];
  for (let i = 0; i < n; i++) for (let j = result.length - 1; j >= 0; j--) result.push(result[j] | (1 << i));
  return result;
};
