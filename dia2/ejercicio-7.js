const
    secretNumber = Math.round( Math.random() * 10 ),
    userNumber = parseInt( prompt( 'Adivina un # de 1 a 10, escribe tu número' ) ) ;

if( secretNumber === userNumber )
    console.log( 'Felicitaciones, ese era!' );
else
    console.log( 'Lo siento, intenta nuevamente!' );