// Function to access deep properties based on a string path
function deepGet(obj, path) {
    var keys = path.split('.');
    var result = obj;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (result[key] === undefined)
            return undefined;
        result = result[key];
    }
    return result;
}
var obj = {
    foo: {
        bar: {
            baz: 42,
        },
        list: [1, 2, { value: "test" }],
    },
};
var value = deepGet(obj, 'foo.bar.baz');
console.log(value);
var invalidValue = deepGet(obj, 'foo.nonExistent.key');
