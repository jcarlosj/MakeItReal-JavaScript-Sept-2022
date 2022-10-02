const repeat = Number( prompt( 'Ingrese # veces a sumar una repetición' ) );
let total = 0;

for( let i = 1; i <= repeat; i++ )
    total += i;

console.log( total );