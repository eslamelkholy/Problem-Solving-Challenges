/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const result = [];
  const phoneMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const permute = (string, index) => {
    if (index === digits.length) {
      return result.push(string);
    }

    for (const char of phoneMap[digits[index]]) {
      permute(string + char, index + 1);
    }
  };
  permute('', 0);
  return result;
};
console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations(''));
