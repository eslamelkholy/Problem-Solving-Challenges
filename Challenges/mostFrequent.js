const getMostFrequent = (arr) => {
  const coutElement = {};
  let compare = 0;
  let mostFrequent;
  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    if (element in coutElement) coutElement[element]++;
    else coutElement[element] = 1;
    if (coutElement[element] > compare) {
      compare = coutElement[element];
      mostFrequent = element;
    }
  }
  return mostFrequent;
};

console.log(getMostFrequent([1, 2, 5, 7, 1, 4, 2, 3, 5, 76, 1]));
module.exports = {
  getMostFrequent,
};
