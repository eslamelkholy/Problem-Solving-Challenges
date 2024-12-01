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

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let left = 0;
  let right = 0;
  let currentChar = "";

  while (right < haystack.length) {
    const char = haystack[right];

    currentChar += char;

    if (currentChar.length === needle.length) {
      if (currentChar === needle) return left;

      left++;
      currentChar = currentChar.slice(1);
    }

    right++;
  }

  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let right = 0;

  while (right < haystack.length) {
    const currentChar = haystack[right];

    if (currentChar === needle[0]) {
      const slicedStr = haystack.slice(right, right + needle.length);
      if (slicedStr === needle) return right;
    }

    right++;
  }

  return -1;
};
