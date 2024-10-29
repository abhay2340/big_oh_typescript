function describePerson(person) {
    return "Name: ".concat(person.name, ",Age:  ").concat(person.age);
}
var person = { name: "abhay", age: 23 };
console.log(describePerson(person));
