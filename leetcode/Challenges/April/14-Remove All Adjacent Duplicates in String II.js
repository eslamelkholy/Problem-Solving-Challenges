/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function (S, K) {
  let stackChar = S.split('');
  let stack = [0];
  let i;
  let j;
  for (i = 1, j = 1; j < S.length; stackChar[++i] = stackChar[++j]) {
    if (stackChar[i] !== stackChar[i - 1]) stack.push(i);
    else if (i - stack[stack.length - 1] + 1 === K) i = stack.pop() - 1;
  }
  return stackChar.slice(0, i + 1).join('');
};
console.log(removeDuplicates('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4));
// console.log(removeDuplicates('pbbcggttciiippooaais', 2));
// console.log(removeDuplicates('deeedbbcccbdaa', 3));
// console.log(removeDuplicates('abcd', 2));
