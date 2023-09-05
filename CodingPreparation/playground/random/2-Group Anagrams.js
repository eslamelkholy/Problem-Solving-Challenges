/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort();

    if (anagramMap[sortedStr] === undefined) {
      anagramMap[sortedStr] = [];
    }

    anagramMap[sortedStr].push(str);
  }

  return Object.values(anagramMap);
};
console.log(groupAnagrams((strs = ["eat", "tea", "tan", "ate", "nat", "bat"])));
