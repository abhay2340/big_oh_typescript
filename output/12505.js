function updateValuesWithPrefix(obj, prefix) {
    if (typeof obj === "string") {
        // If the value is a string, add the prefix and return it
        return (prefix + obj);
    }
    if (Array.isArray(obj)) {
        // If the value is an array, recursively apply the function to each element
        return obj.map(function (item) { return updateValuesWithPrefix(item, prefix); });
    }
    if (typeof obj === "object" && obj !== null) {
        // If the value is an object, create a new object with prefixed string values
        var result = {};
        for (var i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            result[key] = updateValuesWithPrefix(value, prefix);
        }
        return result;
    }
    // For other types (number, boolean, etc.), return the value as is
    return obj;
}
// Example usage:
var obj = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345,
        location: {
            country: "Fantasy",
        },
    },
    isActive: true,
};
var updatedObj = updateValuesWithPrefix(obj, "Hello, ");
console.log(updatedObj);
/*
Output:
{
  name: "Hello, Alice",
  age: 30,
  address: {
    city: "Hello, Wonderland",
    zip: 12345,
    location: {
      country: "Hello, Fantasy",
    },
  },
  isActive: true,
}
*/
