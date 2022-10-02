const number = parseInt( prompt( 'Ingresa un # entero' ) );
let message = '';

if( number % 3 === 0 )
    message += 'bing';
if( number % 5 === 0 ) 
    message += 'bong';

if( ! message )
    message = number;

console.log( message );  // 9 = bing, 25 = bong,  15 = bingbong, 2 = 2