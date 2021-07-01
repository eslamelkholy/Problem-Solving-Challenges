/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (S) {
  const length = S.length;
  let ans = 0;
  for (let i = 0; i < length; i++) {
    let j = i - 1;
    let k = i;
    while (k < length - 1 && S[k] === S[k + 1]) k++;
    (ans += ((k - j) * (k - j + 1)) / 2), (i = k++);
    while (j >= 0 && k < length && S[k] === S[j]) j--, k++, ans++;
  }
  return ans;
};

const isPalindrom = (str) => {
  for (let i = 0; i < str.length; i++) if (str[i] !== str[str.length - 1 - i]) return false;
  return true;
};

console.log(countSubstrings('aaa'));
// console.log(countSubstrings('abc'));
