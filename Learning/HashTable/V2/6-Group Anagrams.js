/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramsMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort();

    if (anagramsMap[sortedStr]) {
      anagramsMap[sortedStr].push(str);
    } else {
      anagramsMap[sortedStr] = [str];
    }
  }

  return Object.values(anagramsMap);
};

console.log(groupAnagrams((strs = ["eat", "tea", "tan", "ate", "nat", "bat"])));
