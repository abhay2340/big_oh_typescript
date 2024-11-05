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
function updateObject(obj, key, value) {
    var _a;
    return __assign(__assign({}, obj), (_a = {}, _a[key] = value, _a));
}
var obj = { a: 1, b: 'hello', c: true };
var updated = updateObject(obj, 'b', 'world');
console.log(updated);
