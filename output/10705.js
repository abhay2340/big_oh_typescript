var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// The deepMerge function
function deepMerge(target, source) {
    var result = __assign({}, target); // Start with a shallow copy of the target
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            var sourceValue = source[key];
            var targetValue = target[key];
            // If both values are objects, merge them recursively
            if (isObject(sourceValue) && isObject(targetValue)) {
                result[key] = deepMerge(targetValue, sourceValue);
            }
            else {
                // Otherwise, assign the source value to the result
                result[key] = sourceValue;
            }
        }
    }
    return result;
}
// Utility function to check if a value is an object
function isObject(value) {
    return value !== null && typeof value === 'object';
}
// Example usage
var obj1 = { a: 1, b: { c: 2 } };
var obj2 = { b: { d: 3 }, e: 4 };
var merged = deepMerge(obj1, obj2);
// Type of merged will be { a: number; b: { c: number; d: number; }; e: number; }
console.log(merged); // Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
