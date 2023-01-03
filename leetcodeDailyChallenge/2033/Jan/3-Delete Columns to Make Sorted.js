/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let counter = 1;
  let N = strs.length;
  let prev = "";
  let numOfDeleted = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < N; j++) {
      if (strs[j][i] < prev) {
        numOfDeleted++;
        prev = "";
        counter = 1;
        break;
      }
      prev = strs[j][i];

      if (counter % N === 0) {
        counter = 1;
        prev = "";
      } else {
        counter++;
      }
    }
  }
  return numOfDeleted;
};

// console.log(minDeletionSize(["rrjk", "furt", "guzm"]));
console.log(minDeletionSize(["qowfc", "spyge", "sqbif", "vvrkk"]));
