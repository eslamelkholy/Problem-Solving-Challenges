var minFlipsMonoIncr = function (s) {
  let zerosCount = 0;
  let onesCount = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '0' ? zerosCount++ : onesCount++;
    zerosCount = Math.min(zerosCount, onesCount);
  }

  return zerosCount;
};
