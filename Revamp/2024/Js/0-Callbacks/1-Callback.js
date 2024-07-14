function delay(cb, ms) {
  setTimeout(cb, ms);
}

function print() {
  console.log("Hello World");
}

delay(print, 1000);
