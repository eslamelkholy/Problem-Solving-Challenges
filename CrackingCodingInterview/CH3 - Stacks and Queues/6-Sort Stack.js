const sortStack = (s) => {
  const tempStack = [];

  while (s.length > 0) {
    const temp = s.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      s.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  while (tempStack.length > 0) {
    s.push(tempStack.pop());
  }

  return s;
};

console.log(sortStack([11, 2, 32, 3, 41]));

// https://www.geeksforgeeks.org/problems/sort-a-stack/1
