/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const regex = /[aeiou]/g;
  const wordListSet = new Set(wordlist);
  const wordListMap = {};
  const vowelsMap = {};

  for (let i = wordlist.length - 1; i >= 0; i--) {
    wordListMap[wordlist[i].toLowerCase()] = wordlist[i];
    vowelsMap[wordlist[i].toLowerCase().replace(regex, '#')] = wordlist[i];
  }
  for (let j = 0; j < queries.length; j++)
    if (wordListSet.has(queries[j])) continue;
    else
      queries[j] =
        wordListMap[queries[j].toLowerCase()] || vowelsMap[queries[j].toLowerCase().replace(regex, '#')] || '';

  return queries;
};

console.log(
  spellchecker(
    ['KiTe', 'kite', 'hare', 'Hare'],
    ['kite', 'Kite', 'KiTe', 'Hare', 'HARE', 'Hear', 'hear', 'keti', 'keet', 'keto']
  )
); // ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
