/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let charCodes = "";
  for (const char of s) {
    charCodes += char.charCodeAt(0) - 96;
  }

  while (k > 0) {
    const sum = charCodes.split("").reduce((a, b) => Number(a) + Number(b), 0);
    charCodes = sum + "";
    k--;
  }

  return charCodes;
};
