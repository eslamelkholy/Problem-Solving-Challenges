/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const firstStringMap = {};
  const secondStringMap = {};

  for (const char of s) {
    firstStringMap[char] ? firstStringMap[char]++: firstStringMap[char] = 1;
  }

  for (const char of t) {
    secondStringMap[char] ? secondStringMap[char]++: secondStringMap[char] = 1 ;

  }

  for (const key in secondStringMap) {
    if(!firstStringMap[key] || firstStringMap[key] !== secondStringMap[key]) {
      return key
    }
  }
  
  return -1;
};

var findTheDifference = function(s, t) {
  const firstStringMap = {};

  for (const char of s) {
    firstStringMap[char] ? firstStringMap[char]++: firstStringMap[char] = 1;
  }

  for (const char of t) {
    if(firstStringMap[char]) {
        firstStringMap[char]--;
    }else {
        return char;
    }
  }
};

console.log(findTheDifference("abcd", "abcde"))
console.log(findTheDifference("", "t"))
console.log(findTheDifference("aa", "a"))
