/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 0) continue;

    for (j = i + 1; j <= i + 2; j++) {
      if (arr[j] % 2 === 0) {
        j = i + 3;
      }
      if (j === i + 2) return true;
    }
  }

  return false;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 0) continue;

    if (arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) return true;
  }

  return false;
};
