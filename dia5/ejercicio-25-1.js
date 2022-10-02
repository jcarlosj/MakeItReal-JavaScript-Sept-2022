let phrase = prompt( 'Ingresa una frase' );
const code = { a: '4', e: '3', i: '1', o: '0', ' ': '' };

phrase = phrase.toLowerCase();

for( let [ key, value ] of Object.entries( code ) )
    phrase = phrase.replaceAll( key, value );

console.log( phrase );