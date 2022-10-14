/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitedWord = s.split(" ");
  let result = "";

  for (const word of splitedWord) {
    const reversed = word.split("").reverse().join("");

    result += result.length > 0 ? " " + reversed : reversed;
  }

  return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const strArr = s.split(" ");
  let result = reverseString(strArr[0]);

  for (let i = 1; i < strArr.length; i++) {
    result += " " + reverseString(strArr[i]);
  }
  return result;
};

const reverseString = function (s) {
  let str = s.split("");
  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while (leftPointer < rightPointer) {
    const temp = str[leftPointer];
    str[leftPointer] = str[rightPointer];
    str[rightPointer] = temp;

    leftPointer++;
    rightPointer--;
  }
  return str.join("");
};
