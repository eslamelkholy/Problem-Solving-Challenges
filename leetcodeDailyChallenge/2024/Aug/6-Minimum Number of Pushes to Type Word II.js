/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const freqMap = {};
  const maxPQ = new MaxPriorityQueue();
  let totalPushes = 0;
  let currentRound = 8;

  for (const char of word) {
    freqMap[char]++ || (freqMap[char] = 1);
  }

  for (const key in freqMap) {
    maxPQ.enqueue(key, freqMap[key]);
  }

  while (maxPQ.size() > 0) {
    totalPushes += maxPQ.dequeue().priority * Math.floor(currentRound / 8);

    currentRound++;
  }

  return totalPushes;
};
