/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let maxLength = 0;

  const backtrack = (currentCombination, index) => {
    const charMap = {};
    const concatedChar = currentCombination.join("");
    for (const char of concatedChar) {
      charMap[char]++ || (charMap[char] = 1);
      if (charMap[char] > 1) return 0;
    }

    maxLength = Math.max(maxLength, concatedChar.length);

    for (let i = index; i < arr.length; i++) {
      let skip = false;
      for (const char of arr[i]) {
        if (currentCombination.join("").includes(char)) {
          skip = true;
          break;
        }
      }
      if (skip) continue;

      currentCombination.push(arr[i]);

      backtrack([...currentCombination], i + 1);

      currentCombination.pop();
    }
  };
  backtrack([], 0);

  return maxLength;
};

console.log(maxLength((arr = ["un", "iq", "ue"])));
console.log(maxLength((arr = ["cha", "r", "act", "ers"])));
console.log(maxLength((arr = ["abcdefghijklmnopqrstuvwxyz"])));
console.log(maxLength((arr = ["aa", "bb"])));
console.log(maxLength(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]));
