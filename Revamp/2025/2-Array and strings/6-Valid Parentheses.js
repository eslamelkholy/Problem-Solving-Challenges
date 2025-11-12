/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (mapping[char] !== undefined) {
      const current = stack.pop();
      if (current !== mapping[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
