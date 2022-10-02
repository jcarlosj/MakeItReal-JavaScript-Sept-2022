const userNumber = Number( prompt( 'Ingresa un #' ) );
let numbers = [];

for ( let i = 1; i <= userNumber; i++ )
    numbers.push( i );

numbers.splice( 1, 1 );
numbers.forEach( number => console.log( number ) );