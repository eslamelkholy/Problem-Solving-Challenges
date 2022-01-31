var maximumWealth = function (accounts) {
  let maxResult = 0;
  for (const account of accounts) {
    const sumAccount = account.reduce((a, b) => a + b, 0);
    if (sumAccount > maxResult) maxResult = sumAccount;
  }
  return maxResult;
};
