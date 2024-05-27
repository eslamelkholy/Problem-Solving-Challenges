/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap[sChar] === undefined && tMap[tChar] === undefined) {
      sMap[sChar] = tChar;
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) return false;
  }

  return true;
};
