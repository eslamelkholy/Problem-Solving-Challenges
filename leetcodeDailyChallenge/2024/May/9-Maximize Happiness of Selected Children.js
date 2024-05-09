/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let max = 0;

  let rounds = 0;
  while (k > 0) {
    const happinessSum = happiness[rounds] - rounds;
    if (happinessSum > 0) max += happiness[rounds] - rounds;

    rounds++;
    k--;
  }

  return max;
};

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let max = 0;
  let rounds = 0;

  while (k > 0) {
    max += Math.max(happiness[rounds] - rounds, 0);

    rounds++;
    k--;
  }

  return max;
};
