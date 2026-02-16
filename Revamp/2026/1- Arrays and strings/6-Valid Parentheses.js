/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const mapping = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const str of s) {
    if (mapping[str] !== undefined) {
      const currentParenthese = stack.pop();
      if (mapping[str] !== currentParenthese) {
        return false;
      }
    } else {
      stack.push(str);
    }
  }

  return stack.length === 0;
};
