/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    if (anagramMap[sortedStr] === undefined) anagramMap[sortedStr] = [];
    anagramMap[sortedStr].push(str);
  }

  return Object.values(anagramMap);
};
