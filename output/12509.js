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
// Generic function to merge user data with related data
function mergeUserData(users, relatedData, key) {
    return users.map(function (user) {
        var _a;
        // Filter related data items where userId matches user id
        var userRelatedData = relatedData.filter(function (item) { return item.userId === user.id; });
        return __assign(__assign({}, user), (_a = {}, _a[key] = userRelatedData, _a));
    });
}
// Example usage:
var users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
];
var purchases = [
    { userId: 1, item: "Laptop", price: 1200 },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
];
var userReviews = [
    { userId: 1, review: "Not good", star: 1200 },
    { userId: 2, review: "Bad", star: 800 },
    { userId: 1, review: "Average", star: 20 },
    { userId: 3, review: "Excellent", star: 100 },
    { userId: 2, review: "Poor", star: 200 },
];
// Merging purchases with users
var mergedDataWithPurchases = mergeUserData(users, purchases, "purchases");
// Merging reviews with users
var mergedDataWithReviews = mergeUserData(users, userReviews, "reviews");
console.log("Merged with Purchases:", mergedDataWithPurchases);
console.log("Merged with Reviews:", mergedDataWithReviews);
