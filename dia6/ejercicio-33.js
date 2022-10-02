const capitalizar = ( phrase ) => {
    let arrWords = phrase.split( ' ' );  // Convierte la cadena en un array separado por espacios

    arrWords.forEach( ( item, index, object ) => {
        let firstCharacter = item.charAt( 0 ).toUpperCase();  // Obtener primer caracter de la palabra en cada item del array y convertirla a mayuscula
        object[ index ] = firstCharacter + object[ index ].slice( 1 );  // Reemplaza la letra por su nuevo valor
    });

    return arrWords.join( ' ' );
}

console.log( capitalizar( "pedro perez" ) );    // "Pedro Perez"
console.log( capitalizar( "make it real" ) );   // "Make it Real"