/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0;
  let tenCount = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fiveCount++;
      continue;
    }

    if (bill === 10) {
      if (fiveCount < 0) return false;

      tenCount++;
      fiveCount--;
    }

    if (bill === 20) {
      if (tenCount > 0 && fiveCount > 0) {
        fiveCount--;
        tenCount--;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
