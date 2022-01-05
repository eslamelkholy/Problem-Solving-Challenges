var bitwiseComplement = function (num) {
  let x = 1;

  while (num > x) {
    x = x * 2 + 1;
  }

  return x ^ num;
};
