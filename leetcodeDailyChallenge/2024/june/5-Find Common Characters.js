/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const result = [];
  const firstWord = [...words[0]];

  for (const char of firstWord) {
    if (words.every((word) => word.includes(char))) {
      result.push(char);

      words = words.map((word) => word.replace(char, ""));
    }
  }

  return result;
};
