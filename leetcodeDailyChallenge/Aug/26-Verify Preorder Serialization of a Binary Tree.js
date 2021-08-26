/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let count = 1;
  for (const val of preorder.split(',')) {
    count--;
    if (count < 0) return false;
    if (val !== '#') count += 2;
  }
  return count === 0;
};
