// /**
//  * @param {number[][]} properties
//  * @return {number}
//  */
// var numberOfWeakCharacters = function (properties) {
//   let result = 0;

//   for (let i = 0; i < properties.length; i++) {
//     for (let j = 0; j < properties.length; j++) {
//       const [attackJ, defenseJ] = properties[j];
//       if (attackJ > properties[i][0] && defenseJ > properties[i][1]) {
//         result++;
//         break;
//       }
//     }
//   }
//   return result;
// };

/**
 * @param {number[][]} properties
 * @return {number}
 */
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let result = 0;
  let maxDefence = Number.MIN_SAFE_INTEGER;

  properties.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));

  for (let i = properties.length - 1; i >= 0; i--) {
    if (properties[i][1] < maxDefence) {
      result++;
    } else {
      maxDefence = properties[i][1];
    }
  }

  return result;
};
