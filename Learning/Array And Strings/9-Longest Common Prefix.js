/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  const strMap = {};
  let max = 0;
  let result = "";
  let start = strs[0][0];
  for (const str of strs) {
    let prefix = "";
    if (str[0] !== start) return "";
    start = str[0];
    for (let i = 0; i < str.length; i++) {
      prefix += str[i];
      strMap[prefix] !== undefined ? strMap[prefix]++ : (strMap[prefix] = 1);

      max = Math.max(strMap[prefix], max);
    }
  }

  for (const key in strMap) {
    if (strMap[key] !== max || strMap[key] === 1) continue;
    if (key.length > result.length) {
      result = key;
    }
  }
  return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    const str = strs[i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== str[i]) return str.substring(0, i);
    }
  }

  return strs[0];
};
