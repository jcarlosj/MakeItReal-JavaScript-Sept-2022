const max = numbers => numbers.reduce( ( valorPrevio, valorActual ) => valorPrevio < valorActual ? valorActual : valorPrevio );

console.log( max( 1, 2, 3, 4 ) ); // 4
console.log( max( 63, 85, 39, 24, 3 ) ); // 85