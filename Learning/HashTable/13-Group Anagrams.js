/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = {};
  for (const str of strs) {
    const sortedStr = str.split().sort().join("");
    anagramMap[sortedStr] ? anagramMap[sortedStr].push(str) : (anagramMap[sortedStr] = [str]);
  }
  return Object.values(anagramMap);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groupMap = {};

  for (const str of strs) {
    const strKey = str.split("").sort().join("");

    groupMap[strKey] ? groupMap[strKey].push(str) : (groupMap[strKey] = [str]);
  }
  return Object.values(groupMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
