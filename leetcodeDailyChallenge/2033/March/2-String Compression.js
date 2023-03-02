/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    // Base Case Next Char Check >> Reach the End or not Matching
    if (chars[i + 1] !== char) continue;
    // Count
    let counter = 1;
    let pointer = i + 1;
    while (pointer < chars.length && chars[pointer] === char) {
      counter++;
      pointer++;
    }
    // Add
    let Freqnums = counter + "";
    for (let num of Freqnums) {
      chars[++i] = num;
    }

    // Delete
    while (chars[i + 1] === char) {
      chars.splice(i + 1, 1);
    }
  }
  return chars.length;
};
