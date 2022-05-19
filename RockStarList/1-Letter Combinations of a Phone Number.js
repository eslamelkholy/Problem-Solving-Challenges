/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const combinations = [];
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

  if (digits.length === 0) return combinations;

  const permute = (str, index) => {
    if (str.length === digits.length) return combinations.push(str);
    if (str.length > digits.length) return;

    for (const char of digitsMap[digits[index]]) {
      permute(str + char, index + 1);
    }
  };

  permute('', 0);

  return combinations;
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
