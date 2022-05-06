/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
      stack[stack.length - 1][1] = stack[stack.length - 1][1] + 1;
    } else {
      stack.push([s[i], 1]);
    }
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }

  for (const [char, repeat] of stack) result += char.repeat(repeat);

  return result;
};

console.log(removeDuplicates('abcd', 2));
console.log(removeDuplicates('deeedbbcccbdaa', 3));
console.log(removeDuplicates('pbbcggttciiippooaais', 2));
