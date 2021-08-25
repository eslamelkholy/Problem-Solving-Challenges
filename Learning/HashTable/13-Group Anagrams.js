/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = {};
  for (const str of strs) {
    const sortedStr = str.split().sort().join('');
    anagramMap[sortedStr] ? anagramMap[sortedStr].push(str) : (anagramMap[sortedStr] = [str]);
  }
  return Object.values(anagramMap);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
