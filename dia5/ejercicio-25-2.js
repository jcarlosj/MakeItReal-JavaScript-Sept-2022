const
    phrase = prompt( 'Ingresa una frase' ), 
    codes = { a: 4, e: 3, i: 1, o: 0 };

let arrNewPhrase = phrase.split( '' );                      // Convierte la cadena en un array

arrNewPhrase.forEach( ( item, index, object ) => {
    
    if( item === item.toUpperCase() )                       // Valida que sea mayuscula
        object.splice( index, 1, item.toLowerCase() );      // Reemplaza solo las mayusculas
    if( item === ' ' )                                      // Valida que sea un espacio
        object.splice( index, 1 );                          // Reemplaza solo los espacios

    /** Itera objecto de valores a cambiar */
    for( let [ key, value ] of Object.entries( codes ) ) {
        if( key ==  object[ index ] ) {                     // Valida que sea el valor a reemplazar
            object[ index ] = value;                        // Reemplaza la letra por su nuevo valor
        }
    }
});

console.log( arrNewPhrase.join( '' ) );                     // Convierte el array en una cadena