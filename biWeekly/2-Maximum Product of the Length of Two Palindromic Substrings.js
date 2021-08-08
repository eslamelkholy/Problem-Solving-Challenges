/**
 * @param {string} s
 * @return {number}
 */
function maxProduct(str) {
  let maxLength = 1;
  let start = 0;
  let len = str.length;
  let low, high;
  for (let i = 1; i < len; ++i) {
    // Find the longest even
    // length palindrome with
    // center points as i-1 and i.
    low = i - 1;
    high = i;
    while (low >= 0 && high < len && str[low] == str[high]) {
      --low;
      ++high;
    }

    ++low;
    --high;
    if (str[low] == str[high] && high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }

    // Find the longest odd length
    // palindrome with center point as i
    low = i - 1;
    high = i + 1;
    while (low >= 0 && high < len && str[low] == str[high]) {
      --low;
      ++high;
    }

    ++low;
    --high;
    if (str[low] == str[high] && high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }
  }
  return maxLength * maxLength;
}

// console.log(maxProduct('ababbb'));
console.log(maxProduct('zaaaxbbby'));
