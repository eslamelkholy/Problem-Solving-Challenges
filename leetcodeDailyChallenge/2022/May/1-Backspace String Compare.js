/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const left = [];
  const right = [];
  for (const char of s.split('')) {
    char === '#' ? left.pop() : left.push(char);
  }
  for (const char of t.split('')) {
    char === '#' ? right.pop() : right.push(char);
  }

  return left.join('') === right.join('');
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a#c', 'b'));
