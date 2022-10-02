const arr = [1, 2, 3, 4]

// Destructurar un Array
const [ first, second ] = arr;

console.log( first ); // 1
console.log( second ); // 2

const person = {
    name: "Pedro",
    age: 20
}

// Desestructurar un Objeto
const { name, age } = person;

console.log( name ); // "Pedro"
console.log( age );