const phrase = prompt('Ingrese una frase');

let arrNewPhrase = phrase.split( ' ' );  // Convierte la cadena en un array separado por espacios

arrNewPhrase.forEach( ( item ) => {
    console.log( item );
});