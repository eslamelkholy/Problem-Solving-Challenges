/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    const startPoint = i;
    const prevCost = gas[i];

    const canComplete = canTravel(gas, cost, startPoint, startPoint + 1, prevCost);
    if (canComplete !== -1) return canComplete;
  }
  return -1;
};

const canTravel = (gas, cost, startPoint, currentPoint, prevCost) => {
  if (currentPoint >= gas.length) {
    currentPoint = 0;
  }
  const travelCost = currentPoint === 0 ? cost[gas.length - 1] : cost[currentPoint - 1];

  if (travelCost > prevCost) {
    return -1;
  }

  const currentCost = prevCost - travelCost + gas[currentPoint];

  if (currentPoint === startPoint) return startPoint;

  return canTravel(gas, cost, startPoint, currentPoint + 1, currentCost);
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
