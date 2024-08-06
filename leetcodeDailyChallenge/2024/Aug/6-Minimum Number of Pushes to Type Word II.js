/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const freqMap = {};
  let maxPQ = new MaxPriorityQueue();
  let totalPushes = 0;
  let rounds = 1;
  let currentRound = 0;

  for (const char of word) {
    freqMap[char]++ || (freqMap[char] = 1);
  }

  for (const key in freqMap) {
    maxPQ.enqueue(key, freqMap[key]);
  }

  while (maxPQ.size() > 0) {
    totalPushes += maxPQ.dequeue().priority * rounds;

    currentRound++;
    if (currentRound === 8) {
      rounds++;
      currentRound = 0;
    }
  }

  return totalPushes;
};
