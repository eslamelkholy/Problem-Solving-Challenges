/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const taskMap = {};
  let rounds = 0;

  for (const task of tasks) {
    taskMap[task] ? taskMap[task]++ : (taskMap[task] = 1);
  }

  for (const key in taskMap) {
    if (taskMap[key] < 2) return -1;

    while (taskMap[key] > 0) {
      taskMap[key] -= 3;
      rounds++;
    }
  }

  return rounds;
};
