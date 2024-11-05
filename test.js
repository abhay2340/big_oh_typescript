
// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }

//     if (obj instanceof Date) {
//         return new Date(obj.getTime());
//     }

//     if (Array.isArray(obj)) {
//         const deepArray = [];
//         for (let i = 0; i < obj.length; i++) {
//             deepArray[i] = deepClone(obj[i]);
//         }
//         return deepArray;
//     }

//     const deepObj = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             deepObj[key] = deepClone(obj[key]);
//         }
//     }

//     return deepObj;
// }

// const originalObject = {
//     name: "Abhay",
//     age: 30,
//     friends: ["Saruabh", "Ankur", "No one"],
//     address: {
//         city: "Delhi",
//         postalCode: 10001
//     },
//     date=new Date()
// };

// const clonedObject = deepClone(originalObject);

// console.log(clonedObject);
// console.log(clonedObject === originalObject); 
// console.log(clonedObject.address === originalObject.address);

let arr=[1,2,3,4];
let func=()=>{
    console.log(arg)
}
Array.prototype.map= (func)


arr.map((arr)=>{})
// class Test extends Array{
//     constructor(){
//         super()
//         console.log("called");
//     };
//     map=(func)=>{
//         console.log(func)
//     }
// }

// let t=new Test();
// let func=(args)=>{
//     console.log("first")
//      args.forEach(element => {
//         console.log(element)
//      });
// }

// Array.prototype.map=(func)=>{
//     // console.log("proto")
//        func(arr)
// }
// console.log(arr.__proto__.map)
// arr.map((arr)=>{})



// class Test extends Array {
//     constructor(){
//         super()     
//     };
//     map=(func)=>{
//        console.log(func)
//     }
// }

// // let t=new Test();
// .map(3)



// console.log(test.prototype)
// console.log(test.map(4))

// arr.prototype