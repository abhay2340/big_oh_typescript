function loggerWrapper(func) {
    return function (num1, num2) {
        console.log("function Name ".concat(func.name, " with arguments ").concat(num1, "  ").concat(num2));
    };
}
var add = function (a, b) { return a + b; };
var loggedAdd = loggerWrapper(add);
var value = loggedAdd(3, 5);
