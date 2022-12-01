/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const middle = s.length / 2;
  const first = s.substring(0, middle);
  const second = s.substring(middle, s.length);
  const anagramsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let countFirst = 0;
  let countSecond = 0;

  for (let i = 0; i < middle; i++) {
    if (anagramsSet.has(first[i])) countFirst++;

    if (anagramsSet.has(second[i])) countSecond++;
  }

  return countFirst === countSecond;
};
