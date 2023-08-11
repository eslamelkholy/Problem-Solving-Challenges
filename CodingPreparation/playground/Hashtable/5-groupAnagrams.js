/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramsMap = {};

  for (const str of strs) {
    const strArr = [...str].sort();

    if (anagramsMap[strArr] === undefined) anagramsMap[strArr] = [];
    anagramsMap[strArr].push(str);
  }

  return Object.values(anagramsMap);
};

console.log(groupAnagrams((strs = ["eat", "tea", "tan", "ate", "nat", "bat"])));
