/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation1 = function (s) {
  const result = [];
  function dfs(i, build) {
    if (i === s.length) {
      return result.push(build);
    }

    if (!parseInt(s[i]) && parseInt(s[i]) !== 0) {
      dfs(i + 1, build + s[i].toUpperCase());
      dfs(i + 1, build + s[i].toLowerCase());
    } else {
      dfs(i + 1, build + s[i]);
    }
  }
  dfs(0, "");
  return result;
};

var letterCasePermutation = function (s) {
  const result = [];
  const startPosition = 0;
  dfs(result, s, startPosition, "");
  return result;
};

const dfs = (result, s, position, str) => {
  if (str.length === s.length) return result.push(str);

  if (isNumeric(s[position])) {
    dfs(result, s, position + 1, str + s[position]);
  } else {
    dfs(result, s, position + 1, str + s[position].toUpperCase());
    dfs(result, s, position + 1, str + s[position].toLowerCase());
  }
};

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

console.log(letterCasePermutation("a1b2"));
