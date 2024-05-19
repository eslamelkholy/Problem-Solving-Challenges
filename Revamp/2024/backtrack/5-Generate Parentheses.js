// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function (n) {
//   const stack = [{left: n, right: n, combination: ""}];
//   const result = [];

//   while(stack.length > 0) {
//       const {left, right, combination} = stack.pop();
//       if(left > right) continue;

//       if(left > 0) {
//           stack.push({left: left - 1, right, combination: combination + "("})
//       }

//       if(right > 0) {
//           stack.push({left, right: right - 1, combination: combination + ")"})
//       }

//       if(left === 0 && right === 0) {
//           result.push(combination);
//       }
//   }

//   return result;
// };

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  backtrack(n, n, n, result, "");

  return result;
};

const backtrack = (leftRemain, rightRemain, n, result, combination) => {
  if (leftRemain === 0 && rightRemain === 0) return result.push(combination);

  if (leftRemain > rightRemain) return;

  if (leftRemain > 0) backtrack(leftRemain - 1, rightRemain, n, result, combination + "(");
  if (rightRemain > 0) backtrack(leftRemain, rightRemain - 1, n, result, combination + ")");
};
