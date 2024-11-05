function replaceKeysAndConvertStrings(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(function (item) { return replaceKeysAndConvertStrings(item); });
    }
    if (typeof data === "object" && data !== null) {
        var result = {};
        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                // Replace all instances of "id" in the key with "identifier"
                var newKey = key.replace(/id/g, "identifier");
                result[newKey] = replaceKeysAndConvertStrings(data[key]);
            }
        }
        return result;
    }
    return data;
}
// Example usage
var data = {
    userId: "john_doe",
    details: {
        addressId: "abc123",
        name: "John",
        attributes: {
            itemId: "xyz456",
            info: "Some info here",
        },
    },
    items: [
        {
            productId: "p123",
            description: "a product",
        },
        "just a string",
    ],
};
var updatedData = replaceKeysAndConvertStrings(data);
console.log(updatedData);
