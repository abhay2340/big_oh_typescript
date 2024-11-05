var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function filterDogs(animals) {
    var animalsList = []; // Initialize as an empty array
    for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) { // Use `for...of` to iterate over the array
        var animal = animals_1[_i];
        if (animal instanceof Dog) {
            animalsList.push(animal); // Push the Dog instance to the list
        }
    }
    return animalsList; // Return the filtered list
}
var animals = [new Dog(), new Cat(), new Dog()];
console.log(filterDogs(animals)); // Output the filtered array
