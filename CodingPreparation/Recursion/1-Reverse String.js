/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseStringTwoPointers = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    const temp = s[leftPointer];

    s[leftPointer] = s[rightPointer];
    s[rightPointer] = temp;

    leftPointer++;
    rightPointer--;
  }
};

console.log(reverseString((s = ["h", "e", "l", "l", "o"])));
