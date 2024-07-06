/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let running = 1;
  let isForward = true;

  for (let i = 0; i < time; i++) {
    isForward ? running++ : running--;

    if (running === n || running === 1) {
      isForward = !isForward;
    }
  }

  return running;
};

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const fullRounds = Math.floor(time / (n - 1));
  let remainingRunnings = time % (n - 1);

  if (fullRounds % 2 === 0) {
    return remainingRunnings + 1;
  }

  return n - remainingRunnings;
};
