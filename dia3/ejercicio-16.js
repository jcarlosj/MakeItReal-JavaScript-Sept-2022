const 
    initial = Number( prompt( 'Ingrese # inicial del rango' ) ),
    final = Number( prompt( 'Ingrese # final del rango' ) );

if( initial < final ) {
    for( let i = initial; i <= final; i++ )
        console.log( i );
}
else console.log( 'El valor inicial del rango debe ser menor que el valor inicial' );