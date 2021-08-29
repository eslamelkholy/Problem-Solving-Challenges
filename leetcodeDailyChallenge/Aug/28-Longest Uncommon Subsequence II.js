/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const subStrMap = {};
  for (const str of strs) {
    for (let i = 0; i < str.length; i++) {
      let subStr = '';
      for (let j = 0; j < str.length; j++) {
        if ((i >> j) & 1) subStr += str[j];
      }
      subStrMap[subStr] ? subStrMap[subStr]++ : (subStrMap[subStr] = 1);
    }
  }
  let ans = -1;
  console.log(subStrMap);
  for (const subStr in subStrMap) {
    ans = Math.max(ans, subStrMap[subStr]);
  }
  return ans;
};

console.log(findLUSlength(['aba', 'cdc', 'eae']));
console.log(findLUSlength(['aaa', 'aaa', 'aa']));
