function stringify(number) {
    if (typeof number === 'string')
        return number;
    else
        return "".concat(number);
}
console.log(typeof stringify(123));
console.log(typeof stringify("123"));
