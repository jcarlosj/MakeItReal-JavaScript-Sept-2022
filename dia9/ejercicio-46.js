const hola = ( name = 'Pedro') => `Hola ${ name }!`;

console.log( hola() );          // "Hola Pedro!"
console.log( hola( "Maria" ) ); // "Hola Maria!"