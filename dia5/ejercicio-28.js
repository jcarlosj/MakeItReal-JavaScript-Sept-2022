const
    firstPhrase = prompt( 'Ingrese una frase' ),
    secondPhrase = prompt( 'Ingrese otra frase' ),
    firstSet = new Set( firstPhrase ),    // Creamos conjunto de valores que no se repiten
    secondSet = new Set( secondPhrase );  // Creamos conjunto de valores que no se repiten

/** Crea un nuevo conjunto filtrando los valores coincidentes de los conjuntos anteriores */
const intersection = new Set( [ ...firstSet ].filter( character => secondSet.has( character ) ) );

console.log( `Los caracteres en común son: ${ Array.from( intersection ).join( ', ' ) }` );   // Convertimos un conjunto o array a una cadena separada por comas