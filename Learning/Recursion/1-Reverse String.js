/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    const temp = s[leftPointer];

    s[leftPointer] = s[rightPointer];
    s[rightPointer] = temp;

    leftPointer++;
    rightPointer--;
  }

  return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  reverse(s, 0);
  return s;
};

const reverse = (s, index) => {
  if (index > s.length / 2 - 1) return;

  const opposite = s.length - 1 - index;
  const temp = s[index];
  s[index] = s[opposite];
  s[opposite] = temp;

  reverse(s, index + 1);
};
