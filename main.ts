// // interface Product{
// //     id: number,
// //     name: string,
// //     price: number
// // }

// // function getProduct(id:number) : Product {
// //     return {
// //       id: id,
// //       name: `Awesome Gadget ${id}`,
// //       price: 99.5
// //     }
// //   }

// //   const product = getProduct(1);
// // console.log(`The product ${product.name} costs $${product.price}`);

// // const heroes=["hey","you","there"];
// // const heroes=[1,2,3,4];
// // const heroes=[1,2,3,4,"abhay"];

// // heroes.map(hero=>{
// //     return `hero  ${hero}`
// // })

// // -----------------------------------------------

// // type User = {
// //     name: string,
// //     email: string,
// //     isActive: boolean
// // }

// // function createUser(user: User): User {
// //     return { ...user };  // Return the user object directly
// // }

// // // Test the function
// // const newUser = createUser({ name: "Abhay", email: "abhay@gmail.com", isActive: true });
// // console.log(newUser);

// // ---------------------------------------------------

// // const arrayData:string []=["heye",'sdjhjhe'];
// // const arrayData2: number[] = [1,2,3,4,5];

// // const arrayData3:Array<number>=[1,3,4,43,34]

// // type User={
// //     name:string,
// //     isActive:boolean
// // }

// // const userData:User[]=[]

// // ________________________Union_________________________

// // let score :number|string=33
// // let scores :(number|string)[]=["1",2,"ej",4];
// // score="34"

// // ____________________________Tuples________________________
// // It is used when we want the array items and thier data types in a specific format

// // let id :[number,string]=[1,"abhay"]
// // let tuple: [number, string, boolean] = [1, "hello", true];

// // ---------------enum--------------------------

// //  const enum SeatChoice{
// //     AISLE="aisle",
// //     MIDDLE="middle",
// //     WINDOW="window",
// //     FOURTH="fourth"
// // }

// // const hcSeat=SeatChoice.AISLE

// // _______________Interface___________________________

// // interface User {
// //   readonly dbID: number;
// //   email: string;
// //   userID: number;
// //   googleID?: string;
// //   startTrial: () => string;
// //   getCoupon(couponname:string):number
// // }

// // interface Admin extends User{
// //     role:"admin"|"learner"
// // }

// // const abhay: User = {
// //   dbID: 22,
// //   email: "sdjj.com",
// //   userID: 234,
// //   startTrial: () => {
// //     return "heyy from return";
// //   },
// //   getCoupon:(name)=>{
// //     return 10;
// //   }
// // };

// // ______________classes___________________________________________

// // class User{
// //     email:string
// //   private  name:string
// //    readonly city:string="asd"
// //     constructor(email:string,name:string){
// //         this.email=email,
// //         this.name=name
// //     }
// // }

// // const abhay=new User("abhay@gmail.com","abha")
// // abhay.city

// //---------- tsc 12223.ts --outdir ./output/

// // --------------------Interface----------------------

// // interface TakePhoto {
// //   cameraMode: string;
// //   filter: string;
// //   burst: number;
// // }

// // interface Story {
// //   createStory(): void;
// // }

// // class Instagram implements TakePhoto {
// //   constructor(
// //     public cameraMode: string,
// //     public filter: string,
// //     public burst: number
// //   ) {}
// // }

// // class Youtube implements TakePhoto, Story {
// //   constructor(
// //     public cameraMode: string,
// //     public filter: string,
// //     public burst: number,
// //     public short:string
// //   ) {}

// //   createStory(): void {
// //       console.log("Creating a story on YouTube");
// //   }
// // }



// // -------------------------Abstract Classes-------------------

// type TransformKeys<T, M extends { [K in keyof M]: keyof T }> = {
//     [P in keyof M]: T[M[P]];
//   } & Omit<T, M[keyof M]>;
  
//   // Function implementation
//   function transformKeys<T, M extends { [K in keyof M]: keyof T }>(
//     obj: T,
//     mappings: M
//   ): TransformKeys<T, M> {
//     const result: any = { ...obj };
  
//     for (const newKey in mappings) {
//       const originalKey = mappings[newKey];
//       result[newKey] = result[originalKey];
//       delete result[originalKey];
//     }
  
//     return result;
//   }
  
//   // Usage example
//   const user = {
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 54,
//   };
  
//   const transformedUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
//   // Type of transformedUser:
//   // {
//   //   first: string;
//   //   last: string;
//   //   age: number;
//   // }
  
//   type filterFun=(num:number):=>boolean

// function formatFilter(filter: number[],filter:filterFun){
// }



type Flag = 'yes' | 'no' | boolean;

function funFlag(isFlagString: true, flagValue: 'yes' | 'no'): void;
function funFlag(isFlagString: false, flagValue: boolean): void;
function funFlag(isFlagString: boolean, flagValue: Flag): void {
  // Implementation here
}

// Valid calls
funFlag(true, 'yes');  // OK
funFlag(true, 'no');   // OK
funFlag(false, true);  // OK
funFlag(false, false); // OK

// Invalid calls (will cause TypeScript errors)
// funFlag(true, true);   // Error: Argument of type 'true' is not assignable to parameter of type '"yes" | "no"'
// funFlag(true, false);  // Error: Argument of type 'false' is not assignable to parameter of type '"yes" | "no"'
// funFlag(false, 'yes'); // Error: Argument of type '"yes"' is not assignable to parameter of type 'boolean'
// funFlag(false, 'no');  // Error: Argument of type '"no"' is not assignable to parameter of type 'boolean'


function templateRender(template: string, obj: Record<string, any>): string {
  let result = '';
  let i = 0;

  while (i < template.length) {
    const start = template.indexOf('{{', i);
    if (start === -1) {
      // No more placeholders, append the rest of the string
      result += template.slice(i);
      break;
    }

    // Append text before the placeholder
    result += template.slice(i, start);

    const end = template.indexOf('}}', start);
    if (end === -1) {
      // If there's an unmatched '{{', treat the rest as plain text
      result += template.slice(start);
      break;
    }

    // Extract the key name between '{{' and '}}'
    const key = template.slice(start + 2, end).trim();

    // Append the corresponding value from `obj`, or an empty string if it doesn't exist
    result += key in obj ? obj[key] : '';

    // Move the index to the end of the current placeholder
    i = end + 2;
  }

  return result;
}

// Usage
const output = templateRender('Hi, my name is {{name}}', { name: 'Tony' });
console.log(output); // Output: "Hi, my name is Tony"

// ----------------------------------------------------------



type Flag = 'yes' | 'no' | boolean;

// Function overloads
function funFlag(isFlagString: true, flagValue: 'yes' | 'no'): void;
function funFlag(isFlagString: false, flagValue: boolean): void;

function funFlag(isFlagString: boolean, flagValue: Flag): void {
  if (isFlagString) {
    // Check if flagValue is 'yes' or 'no'
    if (flagValue !== 'yes' && flagValue !== 'no') {
      throw new Error("When isFlagString is true, flagValue must be 'yes' or 'no'.");
    }
  } else {
    // Check if flagValue is a boolean
    if (typeof flagValue !== 'boolean') {
      throw new Error("When isFlagString is false, flagValue must be a boolean.");
    }
  }

  // If valid, perform some action (simply printing in this case)
  console.log(`isFlagString: ${isFlagString}, flagValue: ${flagValue}`);
}

// Test calls
funFlag(true, 'yes');   // Valid
funFlag(true, 'no');    // Valid
funFlag(false, true);   // Valid
funFlag(false, false);  // Valid

// Invalid calls (These will raise errors)
// funFlag(true, true);    // Error
// funFlag(true, false);   // Error
// funFlag(false, 'yes');  // Error
// funFlag(false, 'no');   // Error













type CleanObject<T> = {
  [K in keyof T]-?
    : T[K] extends object
    ? CleanObject<T[K]>
    : NonNullable<T[K]>;
};

interface User {
  age?: number;
  name: string | null;
}

