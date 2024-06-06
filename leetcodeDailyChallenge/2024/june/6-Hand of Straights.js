/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  hand.sort((a, b) => a - b);
  let currentGroup = [];

  for (let i = 0; i < hand.length; i++) {
    if (currentGroup.length > 0 && currentGroup[currentGroup.length - 1] === hand[i]) continue;
    if (currentGroup.length > 0 && currentGroup[currentGroup.length - 1] !== hand[i] - 1) return false;

    currentGroup.push(hand[i]);
    hand.splice(i, 1);
    i--;

    if (groupSize === currentGroup.length) {
      currentGroup = [];
      i = -1;
    }
  }

  return currentGroup.length === 0;
};
