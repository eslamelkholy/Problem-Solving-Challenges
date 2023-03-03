/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let needleStart = needle[0];

  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i];
    if (char !== needleStart) continue;

    let needlePointer = 0;

    while (needlePointer < needle.length) {
      if (haystack[needlePointer + i] !== needle[needlePointer]) break;

      if (needlePointer === needle.length - 1) {
        return i;
      }
      needlePointer++;
    }
  }

  return -1;
};

console.log("sadbutsad", "sad");
console.log("a", "a");
