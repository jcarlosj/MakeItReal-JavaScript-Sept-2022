const phrase = prompt( 'Ingresa una frase ' );
let quantityA = 0;

phrase.split( '' ).forEach( item => item === 'a' ? quantityA += 1 : null );

console.log( `La frase tiene ${ quantityA } caracteres "a"` );