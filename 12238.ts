
class Dog{
    dogBreed:string
    constructor(dogBreed:string){
        this.dogBreed=dogBreed;
    }
}
class Cat{
    catBreed:string
    constructor(catBreed:string){
        this.catBreed=catBreed;
    }
}



// function filterDogs(){

// }

let cat1=new Cat("kitty1")
let cat2=new Cat("kitty2")
console.log( cat1 instanceof Cat)