const frecuencias = ( string ) => {
    const valorInicial = {};
    
    return resultado = [ ...string ].reduce( ( valorPrevio, valorActual ) => {
        // Valida que el valorActual sea diferente a un espacio para crear el objeto que acumulara la cantidad de repeticiones
        if( valorActual !== ' ' )
            valorPrevio[ valorActual ] = ( valorPrevio[ valorActual ] || 0 ) + 1;  // La primera ves que se encuentre una letra 'valorPrevio[ valorActual ]' sera indefinido y la cantidad de letras sera 0 CERO

        // console.log( valorPrevio );    // Descomentar para ver como va acumulando los valores en un objeto
        return valorPrevio;
    }, valorInicial );
}


console.log( frecuencias( "hola mundo" ) );
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log( frecuencias( "anita lava la tina" ) );
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }