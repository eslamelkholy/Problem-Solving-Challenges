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

console.log(reverseString(["h", "e", "l", "l", "o"]));
