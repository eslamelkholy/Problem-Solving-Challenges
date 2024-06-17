const urlify0 = (str) => {
  let result = "";
  let skip = false;

  for (const char of str) {
    if (char === " " && skip) continue;
    if (char === " " && !skip) {
      result += "%20";
      skip = true;
      continue;
    }

    skip = false;
    result += char;
  }

  return result;
};

console.log(urlify0("Mr    John   Smith     ", 13));
console.log(urlify0("    Mr    John   Smith     "));
