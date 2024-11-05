class Dog {
    bark() {
      console.log("bhoooo");
    }
  }
  
  class Cat {
    meow() {
      console.log("meow ");
    }
  }
  
  function filterDogs<T>(animals: T[]): Dog[] {
    let animalsList: Dog[] = []; 
    for (let animal of animals) { 
      if (animal instanceof Dog) {
        animalsList.push(animal); 
      }
    }
    return animalsList; 
  }
  
  const animals = [new Dog(), new Cat(), new Dog()];
  console.log(filterDogs(animals)); 
  