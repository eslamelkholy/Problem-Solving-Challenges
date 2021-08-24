/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const strMap = {};
  for (let i = 0; i < s.length; i++) strMap[s[i]] ? strMap[s[i]]['count']++ : (strMap[s[i]] = { count: 1, index: i });

  for (const char in strMap) if (strMap[char]['count'] === 1) return strMap[char]['index'];

  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
