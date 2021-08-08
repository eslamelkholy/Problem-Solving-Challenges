/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);
    if (result.length > 2) {
      let length = result.length;
      if (result[length - 1] == result[length - 2] && result[length - 2] == result[length - 3]) {
        result.pop();
      }
    }
  }
  return result.join('');
};

console.log(makeFancyString('leeetcode'));
