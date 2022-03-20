/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  for (common of [tops[0], bottoms[0]]) {
    let rotateTop = 0,
      rotateBot = 0;
    for (let i = 0; i < tops.length; i++) {
      let top = tops[i];
      let bot = bottoms[i];
      //console.log(top, bot, common);
      if (common !== top && common !== bot) break;
      if (common !== top) rotateTop++;
      if (common !== bot) rotateBot++;
      if (i + 1 === tops.length) return Math.min(rotateBot, rotateTop);
    }
  }
  return -1;
};
var minDominoRotations = function (A, B) {
  const numberOfA = new Array(7).fill(0);
  const numberOfB = new Array(7).fill(0);
  const same = new Array(7).fill(0);
  for (let i = 0; i < A.length; i++) {
    numberOfA[A[i]]++;
    numberOfB[B[i]]++;
    if (A[i] == B[i]) same[A[i]]++;
  }
  for (let i = 1; i <= 6; i++) {
    if (numberOfA[i] + numberOfB[i] - same[i] == A.length) {
      return Math.min(numberOfA[i] - same[i], numberOfB[i] - same[i]);
    }
  }
  return -1;
};
