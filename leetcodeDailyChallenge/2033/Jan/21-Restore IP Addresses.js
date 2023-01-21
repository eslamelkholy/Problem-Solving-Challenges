/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  permute(result, [], s);

  return result.map((s) => s.join("."));
};

const permute = (result, combination, str) => {
  if (combination.length === 3) {
    if (isValid(str)) result.push([...combination, str]);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const subStr = str.slice(0, i);
    if (!isValid(subStr)) continue;

    permute(result, [...combination, subStr], str.slice(i));
  }
};

const isValid = (str) => {
  if (str > 255 || str.length === 0) return false;
  if (str.length >= 2 && str[0] === "0") return false;
  return true;
};
