// Define the fun function with an optional event parameter for flexibility
function fun(cb, simulatedEvent) {
    // Call the callback with the provided event (no 'as any' needed)
    cb(simulatedEvent);
}
// Usage of the fun function with a CustomMouseEvent
fun(function (e) {
    e.stopDefault();
    console.log("CustomMouseEvent coordinates: (".concat(e.x, ", ").concat(e.y, ")"));
}, { stopDefault: function () { return console.log("Default stopped"); }, x: 100, y: 200 });
// Usage of the fun function with a CustomKeyboardEvent
fun(function (e) {
    e.stopDefault();
    console.info("Key pressed: ".concat(e.key));
}, { stopDefault: function () { return console.log("Default stopped"); }, key: "Enter" });
