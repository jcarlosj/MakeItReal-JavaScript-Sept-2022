const Pedro = {
    nombre: 'Pedro Perez',
    edad: 30,
    hobies: [ 'programar', 'squash', 'piano' ],
    estatura: 1.8
};

console.log( Pedro.edad );

for( let [ key, value ] of Object.entries( Pedro ) ) {
    console.log( `${ key }: ${ value }` );
}