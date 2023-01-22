/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  backtrack(s, 0, [], result);

  return result;
};

const backtrack = (str, start, parts, result) => {
  if (start === str.length) {
    return result.push([...parts]);
  }

  for (let i = start + 1; i <= str.length; i++) {
    const currentSub = str.substring(start, i);
    if (isPalindromeString(currentSub)) {
      parts.push(currentSub);

      backtrack(str, i, parts, result);

      parts.pop();
    }
  }
};

const isPalindromeString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

console.log(partition("aab"));
