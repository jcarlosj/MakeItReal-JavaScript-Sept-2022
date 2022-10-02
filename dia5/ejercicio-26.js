const phrase = prompt( 'Ingrese una frase' );

let arrNewPhrase = phrase.split( ' ' );  // Convierte la cadena en un array separado por espacios

arrNewPhrase.forEach( ( item, index, object ) => {
    let firstCharacter = item.charAt( 0 ).toUpperCase();  // Obtener primer caracter de la palabra en cada item del array y convertirla a mayuscula
    object[ index ] = firstCharacter + object[ index ].slice( 1 );  // Reemplaza la letra por su nuevo valor
});

console.log( arrNewPhrase.join( ' ' ) );