/**
 * @param {number} num
 * @return {number}
 * that could only store integers within the 32-bit signed integer range
 * Input: x = 123
 * Output: 321
 * Input: x = -123
 * Output: -321
 * input: 1534236469
 * output: 0
 */

// Mathematical but for Positive Numbers Only
var reverse2 = function(num) {
  let reversedInteger = 0;
  let rem = 0;
  while (num > 0) {
    reversedInteger *= 10;
    rem = num % 10
    num = (num - rem) / 10; 
    reversedInteger += rem
  }  
  return reversedInteger;
};

// Simple Stright Forward Approach
const reverse = (num)   => {
    const MAX_SAFE_INTEGER= Math.pow(2, 31);
    const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER - 1;
    const reversedNumber = parseInt(num.toString().split("").reverse().join(""))* Math.sign(num);
    return reversedNumber >= MIN_SAFE_INTEGER && reversedNumber <= MAX_SAFE_INTEGER ? reversedNumber: 0; 
}



// console.log(reverse1(1534236469));
// console.log(reverse1(-123));
console.log(reverse(123));
