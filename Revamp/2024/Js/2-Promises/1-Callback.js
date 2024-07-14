function delayWithCallback(cb, ms) {
  setTimeout(() => {
    cb();
  }, ms);
}

const print = () => {
  console.log("Hello World");
};

delayWithCallback(print, 1000);
