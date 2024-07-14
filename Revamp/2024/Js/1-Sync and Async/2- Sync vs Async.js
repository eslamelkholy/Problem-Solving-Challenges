const nums = [1, 2, 3, 4];

// Sync
nums.forEach((num) => {
  console.log(num);
});

// Async
nums.forEach((val) => {
  setTimeout(() => {
    console.log(val);
  }, 0);
});
