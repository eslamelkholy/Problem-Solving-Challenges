/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  const NS = s.length;
  const NT = t.length;

  if (NS > NT) return isOneEditDistance(t, s);

  if (NS - NT > 1) return false; // the strings is not one edit away

  for (let i = 0; i < NS; i++) {
    if (s[i] != t[i]) {
      if (NS === NT) {
        return s.slice(i + 1) === t.slice(i + 1); // Strings same
      } else {
        return s.slice(i) === t.slice(i + 1); // Strings different length
      }
    }
  }

  return NS + 1 === NT;
};
