/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j] * 2) return true;
    }
  }

  return false;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const numMap = {};
  for (let i = 0; i < arr.length; i++) {
    numMap[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      const dividedNum = num / 2;
      if (numMap[dividedNum] !== undefined && i !== numMap[dividedNum]) {
        return true;
      }
    }
  }

  return false;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const seen = new Set();

  for (const num of arr) {
    if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
      return true;
    }

    seen.add(num);
  }

  return false;
};
