/**
 *
 * @param {string} s
 * @param {[]} c
 */
function solution(s, c) {
  const strArr = s.split('');
  let result = 0;
  let pointer = 0;

  while (pointer < strArr.length) {
    if (strArr[pointer] === strArr[pointer + 1]) {
      result += Math.min(c[pointer], c[pointer + 1]);

      if (c[pointer + 1] < c[pointer]) {
        strArr.splice(pointer + 1, 1);
        c.splice(pointer + 1, 1);
      } else {
        pointer++;
      }
    } else {
      pointer++;
    }
  }

  return result;
}
console.log(solution('abccbd', [0, 1, 2, 3, 4, 5])); // 2
console.log(solution('abcccbd', [0, 1, 4, 2, 3, 4, 5])); // 5
console.log(solution('abcccbd', [0, 1, 4, 2, 5, 4, 5])); // 6
console.log(solution('aabbcc', [1, 2, 1, 2, 1, 2])); // 3
console.log(solution('aaaa', [3, 4, 5, 6])); // 12
console.log(solution('ababa', [10, 5, 10, 5, 10])); // 0
