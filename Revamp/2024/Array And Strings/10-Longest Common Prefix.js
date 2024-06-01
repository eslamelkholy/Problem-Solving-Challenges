/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const common = strs[0];

  for (let i = 0; i <= common.length; i++) {
    const prefixExists = strs.every((str) => common[i] === str[i]);

    if (!prefixExists) {
      return common.slice(0, i);
    }
  }

  return common;
};
