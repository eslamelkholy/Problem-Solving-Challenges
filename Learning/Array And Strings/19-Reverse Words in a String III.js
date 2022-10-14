/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitedWord = s.split(" ");
  let result = "";

  for (const word of splitedWord) {
    const reversed = word.split("").reverse().join("");

    result += result.length > 0 ? " " + reversed : reversed;
  }

  return result;
};
