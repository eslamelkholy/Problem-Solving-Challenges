/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) continue;

    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[j + i]) break;

      if (j === needle.length - 1) return i;
    }
  }

  return -1;
};
