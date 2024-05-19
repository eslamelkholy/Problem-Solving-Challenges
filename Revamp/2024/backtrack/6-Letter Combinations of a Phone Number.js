/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const reuslt = [];
  if (!digits) return reuslt;

  const phoneMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const backtrack = (index, currentCombination) => {
    if (currentCombination.length === digits.length) return reuslt.push(currentCombination.join(""));

    for (const char of phoneMap[digits[index]]) {
      currentCombination.push(char);

      backtrack(index + 1, currentCombination);

      currentCombination.pop();
    }
  };

  backtrack(0, []);

  return reuslt;
};
