/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.trim().split(/\s+/);
  let left = 0;
  let right = arr.length - 1;

  console.log(arr);

  while (left < right + 1) {
    const temp = arr[left];

    arr[left] = arr[right];
    arr[right] = temp;

    right--;
    left++;
  }
  return arr.join(" ");
};
