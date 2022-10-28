/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramsMap = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");
    anagramsMap[key] === undefined ? (anagramsMap[key] = [str]) : anagramsMap[key].push(str);
  }

  return Object.values(anagramsMap);
};
