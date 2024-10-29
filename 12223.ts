
// function add(num1:number,num2:number):number{
//     return num1+num2;
// }


type mathOperation=(a:number,b:number)=>number;


const add:mathOperation=(x,y)=> x+y;

console.log(add(1,7))