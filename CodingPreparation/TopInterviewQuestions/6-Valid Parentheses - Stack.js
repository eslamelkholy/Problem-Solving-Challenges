/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parenthesesMap = {
    ')': ['{', '['],
    '}': ['(', '['],
    ']': ['(', '{'],
  };

  for (let i = 0; i < s.length; i++) {
    let parenthese = s[i];

    if (parenthese == '(' || parenthese == '[' || parenthese == '{') {
      stack.push(parenthese);
      continue;
    }
    if (stack.length == 0) return false;

    const currentParenthese = parenthesesMap[parenthese];
    let check = stack.pop();
    if (check == currentParenthese[0] || check == currentParenthese[1]) return false;
  }

  return stack.length == 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
