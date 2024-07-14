sayHello();

function sayHello() {
  console.log("Hello World");
}

// Therefore, sayHello(); can be called before the actual function declaration in the code.

sayHelloFunctionExpression(); // TypeError: sayHello is not a function

var sayHelloFunctionExpression = function () {
  console.log("Hello, World!");
};

sayHelloFunctionExpression(); // Output: Hello, World!
