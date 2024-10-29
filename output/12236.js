var array = [1, 2, 3, 4, 5];
function doubleArray(array) {
    var newArray = array.map(function (item) { return item * 2; });
    return newArray;
}
console.log(doubleArray(array));
