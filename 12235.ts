
function stringify(number:(number|string)):string{
       if(typeof number==='string') return number
       else return `${number}`;
}

console.log(typeof stringify(123))
console.log(typeof stringify("123"))

