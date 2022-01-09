/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    let isExists = haystack[i] === needle[0];
    if (isExists) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isExists = false;
          break;
        }
      }
    }
    if (isExists) return i;
  }
  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
