/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const result = [];
  if (!digits) return result;
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

  backtrack(0, "", digits, phoneMap, result);
  return result;
};

const backtrack = (index, currCombination, digits, phoneMap, result) => {
  if (index === digits.length) {
    return result.push(currCombination);
  }

  for (const char of phoneMap[digits[index]]) {
    currCombination += char; // Go Forward

    backtrack(index + 1, currCombination, digits, phoneMap, result);

    currCombination = removeByIndex(currCombination, currCombination.length - 1);
  }
};

function removeByIndex(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}
