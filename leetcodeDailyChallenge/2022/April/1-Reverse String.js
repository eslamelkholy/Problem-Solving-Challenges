/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  while (pointer1 < pointer2) {
    const tempVal = s[pointer1];
    s[pointer1] = s[pointer2];
    s[pointer2] = tempVal;

    pointer1++;
    pointer2--;
  }

  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
