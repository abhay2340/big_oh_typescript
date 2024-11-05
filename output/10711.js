function transformKeys(obj, mappings) {
    var result = {};
    for (var key in obj) {
        var newKey = mappings[key] || key;
        result[newKey] = obj[key];
    }
    return result;
}
// Example usage:
var user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};
var transformedUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
console.log(transformedUser)