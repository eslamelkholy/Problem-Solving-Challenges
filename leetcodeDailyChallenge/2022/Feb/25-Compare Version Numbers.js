var compareVersion = function (version1, version2) {
  let v1 = version1.split('.'),
    v2 = version2.split('.');
  let len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    let n1 = parseInt(v1[i]) || 0;
    let n2 = parseInt(v2[i]) || 0;
    if (n1 == n2) continue;
    return n1 < n2 ? -1 : 1;
  }
  return 0;
};

var compareVersion = function (version1, version2) {
  var revisions1 = version1.split('.');
  var revisions2 = version2.split('.');
  while (revisions1.length > 0 || revisions2.length > 0) {
    if (parseInt(revisions1[0] || 0) > parseInt(revisions2[0] || 0)) return 1;
    else if (parseInt(revisions1[0] || 0) < parseInt(revisions2[0] || 0)) return -1;
    else {
      revisions1 = revisions1.slice(1);
      revisions2 = revisions2.slice(1);
    }
  }
  return 0;
};

console.log(compareVersion('1.01', '1.001'));
console.log(compareVersion('1.0', '1.0.0'));
console.log(compareVersion('1.0', '1.0.1'));
console.log(compareVersion('0.1', '1.1'));
console.log(compareVersion('0.1', '1')); // 0
console.log(compareVersion('7.5.2.4', '7.5.3'));
