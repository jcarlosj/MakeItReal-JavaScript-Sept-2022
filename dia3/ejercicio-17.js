let guessNumber = false;
const secretNumber = Math.round( Math.random() * 10 );

// console.log( secretNumber );

do {
    let userNumber = Number( prompt( 'Ingrese un #' ) );

    if( userNumber === secretNumber ) {
        guessNumber = true;
        console.log( 'Adivinaste!' );
    }
    else {
        console.log( 'Intenta de nuevo!' );
    }

} while( ! guessNumber );