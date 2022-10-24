/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const backtrack = (index, charMap) => {
    for (const [key, val] of charMap) {
      if (val > 1) return 0;
    }

    let best = charMap.size;
    for (let i = index; i < arr.length; i++) {
      const word = arr[i];

      for (const char of word) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
      }
      best = Math.max(best, backtrack(i + 1, charMap));

      for (const key of word) {
        if (charMap.get(key) === 1) {
          charMap.delete(key);
        } else {
          charMap.set(key, charMap.get(key) - 1);
        }
      }
    }
    return best;
  };

  return backtrack(0, new Map());
};
