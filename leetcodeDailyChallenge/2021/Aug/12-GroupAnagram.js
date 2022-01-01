var groupAnagrams = function (strs) {
  const strGroup = {};
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    strGroup[sortedStr] ? strGroup[sortedStr].push(str) : (strGroup[sortedStr] = [str]);
  }
  return Object.values(strGroup);
};
