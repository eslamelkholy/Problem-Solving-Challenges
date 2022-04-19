/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  console.log(isNumeric("1"));
  console.log(isNumeric("s"));
};

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

console.log(letterCasePermutation("a1b2"));
