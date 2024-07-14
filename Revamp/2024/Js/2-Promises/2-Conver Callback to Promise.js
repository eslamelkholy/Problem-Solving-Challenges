const print = () => {
  console.log("Hello World");
};

async function runWithDelay(cb, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
    }, ms);
  });
}

runWithDelay(print, 1000);
