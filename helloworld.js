console.log("Hello, World!");

const persons = [
  { name: "Lebron James", age: 38, occupation: "Basketball Player", ssn: 27475902 },
  { name: "Kevin James", age: 42, occupation: "Actor", ssn: 29349720 },
];

for (const person of persons) {
  console.log(
    `My name is ${person.name}, I am ${person.age} years old, and I work as a ${person.occupation}. My social security number is ${person.ssn}`,
  );
}
