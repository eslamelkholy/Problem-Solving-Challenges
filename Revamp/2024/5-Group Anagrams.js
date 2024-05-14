/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (const str of strs) {
    const sortedAnagram = str.split("").sort();

    if (map[sortedAnagram]) {
      map[sortedAnagram].push(str);
    } else {
      map[sortedAnagram] = [str];
    }
  }

  return Object.values(map);
};
