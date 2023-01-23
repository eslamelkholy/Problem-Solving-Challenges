/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1) return 1;

  const peopleSet = new Set();
  const judgeMap = {};

  for (let i = 0; i < trust.length; i++) {
    peopleSet.add(trust[i][0] + "");

    judgeMap[trust[i][1]] ? judgeMap[trust[i][1]]++ : (judgeMap[trust[i][1]] = 1);
  }
  for (const judge in judgeMap) if (judgeMap[judge] === n - 1 && !peopleSet.has(judge)) return judge;

  return -1;
};
