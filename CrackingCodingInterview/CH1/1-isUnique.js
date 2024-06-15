const isUnique1 = (str) => {
  const set = new Set();
  for (const char of str) {
    if (set.has(char)) return false;

    set.add(char);
  }

  return true;
};

console.log(isUnique1("helloworld"));
