const posPares = arr => arr.filter( ( _, index ) => index % 2 === 0 );  

console.log( posPares( [ "a", "b", "c"] ) ); // ["a", "c"]
console.log( posPares( [ 0, 1, 2, 3, 4 ] ) ); // [0, 2, 4]
console.log( posPares( [] ) ); // []