/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const output = [];
  const socreMap = {};
  const sortedScores = [...score].sort((a, b) => b - a);

  for (let i = 1; i <= score.length; i++) {
    socreMap[sortedScores[i - 1]] = i;
  }

  for (let i = 0; i < score.length; i++) {
    const place = socreMap[score[i]];
    console.log(place);
    switch (place) {
      case 1:
        output.push("Gold Medal");
        break;
      case 2:
        output.push("Silver Medal");
        break;
      case 3:
        output.push("Bronze Medal");
        break;
      default:
        output.push(place + "");
    }
  }
  return output;
};
