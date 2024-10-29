interface Person {
  name: string;
  age: number;
}

function describePerson(person: Person): string {
  return `Name: ${person.name},Age:  ${person.age}`;
}

const person = { name: "abhay", age: 23 };

console.log(describePerson(person));
