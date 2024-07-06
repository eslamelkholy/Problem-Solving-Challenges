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
