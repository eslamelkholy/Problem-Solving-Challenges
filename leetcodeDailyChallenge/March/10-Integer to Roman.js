/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const intVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const strVal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';

  for (let i = 0; i < intVal.length; i++)
    while (intVal[i] <= num) {
      result += strVal[i];
      num -= intVal[i];
    }
  return result;
};

console.log(intToRoman(5));
