/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  // Assume that array has already Sorted
  let MOD = 1_000_000_007;
  let ans = 0;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let T = target - arr[i];
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[j] + arr[k] < T) j++;
      else if (arr[j] + arr[k] > T) k--;
      else if (arr[j] !== arr[k]) {
        let left = 1,
          right = 1;
        while (j + 1 < k && arr[j] === arr[j + 1]) {
          left++;
          j++;
        }
        while (k - 1 > j && arr[k] === arr[k - 1]) {
          right++;
          k--;
        }
        ans += left * right;
        ans %= MOD;
        j++;
        k--;
      } else {
        ans += ((k - j + 1) * (k - j)) / 2;
        ans %= MOD;
        break;
      }
    }
  }
  return ans;
};

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8));

/**
 * let tuple = ['eslam', 24]
 *let [name, age] = tuple
 */
