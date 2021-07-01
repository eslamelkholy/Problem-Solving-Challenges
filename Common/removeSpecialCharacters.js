module.exports = {
  removeSpecialCharacters: (str) => str.replace(/[^a-zA-Z0-9]/g, ""),
  IRemoveSpecialCharacters: (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(),
};
