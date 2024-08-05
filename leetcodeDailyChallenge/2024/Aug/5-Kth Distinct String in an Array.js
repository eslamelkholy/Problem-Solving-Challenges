/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};

  for (const num of arr) map[num]++ || (map[num] = 1);

  for (const str of arr) {
    if (map[str] === 1) {
      k--;
    }

    if (k === 0) return str;
  }

  return "";
};
