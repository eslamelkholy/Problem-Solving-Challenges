/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  let arr = s.split('');
  let n = s.length;
  let pal = [];
  let cut = [];
  for (let i = 0; i < n; i++) {
    cut[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    pal[i] = [];
    for (let j = 0; j < n; j++) {
      pal[i][j] = false;
    }
  }

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = 0; j <= i; j++) {
      if (arr[i] === arr[j] && (j + 1 > i - 1 || pal[j + 1][i - 1])) {
        pal[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, cut[j - 1] + 1);
      }
    }
    cut[i] = min;
  }
  return cut[n - 1];
};

var minCut = function (s) {
  let allPossiblePalindrom = [];
  let min = s.length;
  function findAllPalindrom(s, temp) {
    if (s.length == 0) {
      allPossiblePalindrom.push([...temp]);
      if (temp.length < min) min = temp.length;
      return;
    }
    for (let i = 0; i < s.length; i++) {
      let leftSubString = s.slice(0, i + 1);
      console.log(leftSubString);
      if (isPalindrom(leftSubString)) {
        temp.push(leftSubString);
        findAllPalindrom(s.slice(i + 1), [...temp]); // Right SubString
        console.log(s.slice(i + 1));
        temp.pop();
      }
    }
  }
  findAllPalindrom(s, []);

  return min - 1;
};

const isPalindrom = (str) => {
  for (let i = 0; i < str.length; i++) if (str[i] !== str[str.length - 1 - i]) return false;
  return true;
};

// console.log(minCut('aab'));
// console.log(minCut('ab'));
// console.log(minCut('bb'));
console.log(minCut('ababababababababababababcbabababababababababababa'));
