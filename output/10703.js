function mapObject(obj, callback) {
    var result = {};
    // Iterate over each key-value pair in the object
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Apply callback to each value and store in result with the same key
            result[key] = callback(obj[key]);
        }
    }
    return result;
}
var originalObject = { a: 1, b: 2, c: 3 };
var mappedObject = mapObject(originalObject, function (value) { return value.toString(); });
console.log(mappedObject); 