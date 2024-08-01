/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let seniors = 0;

  for (const detail of details) {
    if (Number(detail[11] + detail[12]) > 60) seniors++;
  }

  return seniors;
};
