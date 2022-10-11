/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];
    if (char !== needle[0]) continue;

    let concatedChar = "";
    for (let j = 0; j < needle.length; j++) {
      concatedChar += haystack[i + j];
    }
    if (concatedChar === needle) return i;
  }

  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let match = haystack.indexOf(needle);
  return match;
};
