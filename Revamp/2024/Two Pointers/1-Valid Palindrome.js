/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filteredChars = "";
  for (let ch of s) {
    if (ch.match(/[a-z0-9]/i)) {
      filteredChars += ch.toLowerCase();
    }
  }
  let left = 0;
  let right = filteredChars.length - 1;

  while (left < right + 1) {
    if (filteredChars[left] !== filteredChars[right]) return false;

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome((s = "A man, a plan, a canal: Panama")));
