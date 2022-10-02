const mat = [
    [ 'Pablo', 'Maria', 'Pedro' ],
    [ 'Diana', 'Juan', 'Federico' ],
    [ 'Roberto', 'Daniel', 'Sandra' ]
];

mat.forEach( ( row, index ) => {
    console.log( `Group ${ index + 1 }:`  );

    row.forEach( ( column, index ) => {
        console.log( `  ${ column }` ); 
    });
});