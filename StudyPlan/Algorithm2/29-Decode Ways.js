/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  let map = new Array(26).fill('').map((v, i) => (i + 1).toString());

  for (let mlen = 1; mlen <= s.length; mlen++) {
    let mess = s.substring(s.length - mlen);
    for (let ch = 0; ch < map.length; ch++) {
      if (mess.indexOf(map[ch]) != 0) {
        continue;
      }

      dp[mlen] += dp[mlen - map[ch].length];
    }
  }

  return dp[s.length];
};
