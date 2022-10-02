const saludar = person => `Hola ${ person?.nombre }${ person?.edad ? `, tienes ${ person?.edad } años` : '' }`;


const pedro = { nombre: "Pedro", edad: 23 };
console.log( saludar( pedro ) ); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log( saludar( maria ) ); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log( saludar( juan ) ); // "Hola Juan"