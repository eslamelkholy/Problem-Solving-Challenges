const getLetterCount = (string) => {
  const letters = string.split("");
  const letterCount = {};
  letters.forEach((letter) => {
    if (letter in letterCount) letterCount[letter]++;
    else letterCount[letter] = 1;
  });
  return letterCount;
};

module.exports = {
  getLetterCount,
};
