// interface Product{
//     id: number,
//     name: string,
//     price: number
// }
// function getProduct(id:number) : Product {
//     return {
//       id: id,
//       name: `Awesome Gadget ${id}`,
//       price: 99.5
//     }
//   }
//   const product = getProduct(1);
// console.log(`The product ${product.name} costs $${product.price}`);
// const heroes=["hey","you","there"];
// const heroes=[1,2,3,4];
// const heroes=[1,2,3,4,"abhay"];
// heroes.map(hero=>{
//     return `hero  ${hero}`
// })
// -----------------------------------------------
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }
// function createUser(user: User): User {
//     return { ...user };  // Return the user object directly
// }
// // Test the function
// const newUser = createUser({ name: "Abhay", email: "abhay@gmail.com", isActive: true });
// console.log(newUser);
// ---------------------------------------------------
// const arrayData:string []=["heye",'sdjhjhe'];
// const arrayData2: number[] = [1,2,3,4,5];
// const arrayData3:Array<number>=[1,3,4,43,34]
// type User={
//     name:string,
//     isActive:boolean
// }
// const userData:User[]=[]
// ________________________Union_________________________
// let score :number|string=33
// let scores :(number|string)[]=["1",2,"ej",4];
// score="34"
// ____________________________Tuples________________________
// It is used when we want the array items and thier data types in a specific format
// let id :[number,string]=[1,"abhay"]
// let tuple: [number, string, boolean] = [1, "hello", true];
// ---------------enum--------------------------
//  const enum SeatChoice{
//     AISLE="aisle",
//     MIDDLE="middle",
//     WINDOW="window",
//     FOURTH="fourth"
// }
// const hcSeat=SeatChoice.AISLE
// _______________Interface___________________________
// interface User {
//   readonly dbID: number;
//   email: string;
//   userID: number;
//   googleID?: string;
//   startTrial: () => string;
//   getCoupon(couponname:string):number
// }
// interface Admin extends User{
//     role:"admin"|"learner"
// }
// const abhay: User = {
//   dbID: 22,
//   email: "sdjj.com",
//   userID: 234,
//   startTrial: () => {
//     return "heyy from return";
//   },
//   getCoupon:(name)=>{
//     return 10;
//   }
// };
// ______________classes___________________________________________
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "asd";
        this.email = email,
            this.name = name;
    }
    return User;
}());
var abhay = new User("abhay@gmail.com", "abha");
abhay.city;
function deepClone(obj) {
    // Check if obj is null or not an object/array
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Date objects
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        const cloneArray = [];
        for (let i = 0; i < obj.length; i++) {
            cloneArray[i] = deepClone(obj[i]);
        }
        return cloneArray;
    }

    // Handle Objects
    const cloneObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key]);
        }
    }

    return cloneObj;
}

// Example usage
const originalObject = {
    name: "Abhay",
    age: 30,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "Delhi",
        postalCode: 10001
    },
    birthdate: new Date("1995-08-25")
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject); // Deep cloned object
console.log(clonedObject === originalObject); // false (not the same reference)
console.log(clonedObject.address === originalObject.address); // false (deeply cloned)
