/**
 * @param {number} n
 * @return {number}
 */
/**
 * So the directed graph becomes,
    a:{e}       or      0->{1}      
    e:{a,i}     or      1->{0,2}
    i:{a,e,o,u} or      2->{0,1,3,4}
    o:{i,u}     or      3->{2,4}
    u:{a}       or      4->{0}    
 */
const countVowelPermutation = (n) => {
  let aCount = 1,
    eCount = 1,
    iCount = 1,
    oCount = 1,
    uCount = 1;
  const MOD = 1000000007;

  for (let i = 1; i < n; i++) {
    let aCountNew = (eCount + iCount + uCount) % MOD;
    let eCountNew = (aCount + iCount) % MOD;
    let iCountNew = (eCount + oCount) % MOD;
    let oCountNew = iCount % MOD;
    let uCountNew = (iCount + oCount) % MOD;
    aCount = aCountNew;
    eCount = eCountNew;
    iCount = iCountNew;
    oCount = oCountNew;
    uCount = uCountNew;
  }
  let result = (aCount + eCount + iCount + oCount + uCount) % MOD;
  return result;
};
console.log(countVowelPermutation(5));
