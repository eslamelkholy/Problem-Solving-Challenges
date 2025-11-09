/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = new Map();

  for (const str of strs) {
    const anagramKey = str.split('').sort().join('');
    if (anagramMap.get(anagramKey) === undefined)
      anagramMap.set(anagramKey, []);

    anagramMap.get(anagramKey).push(str);
  }

  return [...anagramMap.values()];
};
