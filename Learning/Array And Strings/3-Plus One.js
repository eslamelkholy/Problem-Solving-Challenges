/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const strDigit = digits.join("");

  const plusOne = BigInt(strDigit) + 1n + "";

  return plusOne.split("").map((val) => (val = BigInt(val)));
};
