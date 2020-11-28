/**
 * First Solution Using Normal Algorithm
 */
var singleNumber = function (nums) {
  let noDuplicationList = [];
  nums.forEach((number) =>
    !noDuplicationList.includes(number) ? noDuplicationList.push(number) : (noDuplicationList = [])
  );
  return noDuplicationList[0];
};
