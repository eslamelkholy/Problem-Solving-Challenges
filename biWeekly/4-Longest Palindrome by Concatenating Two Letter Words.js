/**
 * @param {string[]} words
 * @return {number}
 */
const isPalindromeString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

var longestPalindrome = function (words) {
  const allPossiblePal = [];
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    let currentPalindrom = words[i];
    if (isPalindromeString(currentPalindrom)) allPossiblePal.push(currentPalindrom);
    for (let j = i + 1; j < words.length; j++) {
      currentPalindrom += words[j];
      if (!isPalindromeString(currentPalindrom)) break;
      if (currentPalindrom.length > maxLength) maxLength = currentPalindrom.length;

      allPossiblePal.push(currentPalindrom);
    }
  }

  return allPossiblePal.join('').length;
};

function buildPalindrome(st) {
  var i = 0;
  var aux;
  while (st != st.split('').reverse().join('')) {
    aux = st.split('');
    aux.splice(st.length - i, 0, st[i]);
    st = aux.join('');
    i++;
  }
  return st;
}

// console.log(buildPalindrome(['lccl', 'gg'].join('')));

console.log(longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab'])); // 8
console.log(longestPalindrome(['cc', 'll', 'xx'])); // 2
console.log(longestPalindrome(['lc', 'cl', 'gg'])); // 6
