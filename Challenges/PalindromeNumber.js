/**
 * Determine whether an integer is a palindrome.
 * An integer is a palindrome when it reads the same backward as forward.
 * Follow up: Could you solve it without converting the integer to a string?
 */

const isPalindromeMathematic = (number) => {
  if (number < 0) return false;
  let reversed = 0,
    y = number;
  while (y > 0) {
    const lastDigit = y % 10;
    reversed = reversed * 10 + lastDigit;
    y = (y / 10) | 0;
  }
  return reversed === number;
};

const isPalindromeString = (item) => {
  const length = item.length;
  for (let i = 0; i < length; i++) {
    const element = item[i];
    if (element !== item[length - 1 - i]) return false;
  }
  return true;
};

module.exports = {
  isPalindromeMathematic,
  isPalindromeString,
};

console.log(isPalindromeString("ele"));
