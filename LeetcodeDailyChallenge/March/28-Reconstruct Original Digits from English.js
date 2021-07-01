/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  let result = '';
  const numbers = {
    zero: { val: 'zero', num: 0 },
    one: { val: 'one', num: 1 },
    two: { val: 'two', num: 2 },
    three: { val: 'three', num: 3 },
    four: { val: 'four', num: 4 },
    five: { val: 'five', num: 5 },
    six: { val: 'six', num: 6 },
    seven: { val: 'seven', num: 7 },
    eight: { val: 'eight', num: 8 },
    nine: { val: 'nine', num: 9 },
  };
  for (const key in numbers) {
    let isExists = true;
    for (const char of numbers[key]['val']) {
      if (!s.includes(char)) isExists = false;
    }
    if (isExists) result += numbers[key]['num'];
  }
  return result;
};

console.log(originalDigits('fviefuro'));
// console.log(originalDigits('zeroonetwothreefourfivesixseveneightnine'));
console.log(originalDigits('zerozero'));
