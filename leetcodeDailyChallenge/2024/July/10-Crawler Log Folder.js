/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];

  for (const log of logs) {
    if (log === "./") {
      continue;
    } else if (log === "../") {
      stack.pop();
    } else {
      stack.push(log);
    }
  }

  return stack.length;
};
