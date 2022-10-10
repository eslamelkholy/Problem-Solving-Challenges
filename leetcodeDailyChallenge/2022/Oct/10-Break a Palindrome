/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  const N = palindrome.length;
  if (N === 1) return "";
  const palArr = palindrome.split("");

  for (let i = 0; i < Math.floor(N / 2); i++) {
    if (palArr[i] !== "a") {
      palArr[i] = "a";
      return palArr.join("");
    }
  }

  palArr[N - 1] = "b";
  return palArr.join("");
};

/**
 * "abccba"
 * "aba"
 */
