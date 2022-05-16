/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result = [];
  if (!digits) return result;

  const permute = (index, str) => {
    if (str.length === digits.length) result.push(str);
    if (index >= digits.length) return;

    for (const char of digitsMap[digits[index]]) {
      permute(index + 1, str + char);
    }
  };

  permute(0, '');
  return result;
};

console.log(letterCombinations('23'));
// console.log(letterCombinations(''));
// console.log(letterCombinations('2'));
