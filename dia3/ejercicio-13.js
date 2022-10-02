const
    phrase = prompt( 'Ingrese una frase' ),
    repeat = Number( prompt( 'Ingrese # veces a repetir' ) );

for( let i = 0; i < repeat; i++ ) {
    console.log( phrase );
}