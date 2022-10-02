const descifrar = ( phrase, code ) => {
    phrase = phrase.toLowerCase();
    
    for( let [ key, value ] of Object.entries( code ) )
        phrase = phrase.replaceAll( key, value );

    return phrase;
}

console.log( descifrar( "h0l4", { 0: "o", 4: "a" } ) );     // "hola"
console.log( descifrar( "pyrmizo", { y: "e", z: "s" } ) );  // "permiso"
console.log( descifrar( "igual", { h: "n" } ) );            // "igual"