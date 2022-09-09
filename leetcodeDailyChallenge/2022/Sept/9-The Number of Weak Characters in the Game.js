/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let result = 0;

  for (let i = 0; i < properties.length; i++) {
    for (let j = 0; j < properties.length; j++) {
      const [attackJ, defenseJ] = properties[j];
      if (attackJ > properties[i][0] && defenseJ > properties[i][1]) {
        result++;
        break;
      }
    }
  }
  return result;
};
