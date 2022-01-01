/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let currentRow = 0;
  for (let i = 0; i < n; i++) {
    currentRow++;
    n -= currentRow;
  }
  return currentRow;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
