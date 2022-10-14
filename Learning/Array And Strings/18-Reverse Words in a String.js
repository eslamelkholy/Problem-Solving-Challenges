/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitedStr = s.trim().split(/\s+/).reverse();
  return splitedStr.join(" ");
};
