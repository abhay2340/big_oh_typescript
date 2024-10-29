
let array:number[]=[1,2,3,4,5]


function  doubleArray(array: number[]): number[] {
  let newArray:number[]=  array.map((item)=>item*2)
    return newArray
}

console.log(doubleArray(array))
