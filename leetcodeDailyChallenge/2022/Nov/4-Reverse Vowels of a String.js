/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const VOWELS = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const arrStr = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (VOWELS.has(arrStr[left]) && VOWELS.has(arrStr[right])) {
      [arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]];
      left++;
      right--;
    } else if (VOWELS.has(arrStr[left])) {
      right--;
    } else {
      left++;
    }
  }
  return arrStr.join("");
};
