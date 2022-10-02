const number = parseInt( prompt( 'Ingresa un #, validemos si es múltiplo de 5' ) );

if( number % 5 === 0 ) 
    console.log( `Si, el número ${ number } es múltiplo de 5` );
else
    console.log( `No, el número ${ number } no es múltiplo de 5` );