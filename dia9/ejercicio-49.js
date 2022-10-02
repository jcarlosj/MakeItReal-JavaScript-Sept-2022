const obtenerImpares = arr => arr.filter( value => value % 2 !== 0 );

console.log( obtenerImpares( [ 1, 2, 3, 4, 5] ) ); // [1, 3, 5]
console.log( obtenerImpares ( [ 64, 35, 27 ] ) ); // [35, 27]
console.log( obtenerImpares( [] ) ); // []

