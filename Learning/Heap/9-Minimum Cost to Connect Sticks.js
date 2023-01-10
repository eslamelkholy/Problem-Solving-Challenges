/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  const connected = [];

  while (sticks.length > 1) {
    sticks.sort((a, b) => b - a);
    const s1 = sticks.pop();
    const s2 = sticks.pop();
    const sum = s1 + s2;
    connected.push(sum);
    sticks.push(sum);
  }

  return connected.reduce((a, b) => a + b, 0);
};
