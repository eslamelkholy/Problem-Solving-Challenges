/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const binaryVal = BigInt(num.toString(2)).toString();
  let complement = "";

  for (const char of binaryVal) {
    complement += char === "0" ? "1" : "0";
  }

  return parseInt(complement, 2);
};
