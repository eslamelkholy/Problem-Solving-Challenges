const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
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

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const maxPQ = new MaxPriorityQueue({ priority: (diff) => diff.priority }); // Telling this to Sort the queue based on Priority
  const output = new Array(score.length);

  for (let i = 0; i < score.length; i++) {
    maxPQ.enqueue({ num: i, priority: score[i] });
  }

  let place = 1;
  while (!maxPQ.isEmpty()) {
    const { num: index } = maxPQ.dequeue().element;
    switch (place) {
      case 1:
        output[index] = "Gold Medal";
        break;
      case 2:
        output[index] = "Silver Medal";
        break;
      case 3:
        output[index] = "Bronze Medal";
        break;
      default:
        output[index] = place + "";
    }
    place++;
  }

  return output;
};
