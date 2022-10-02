const pares = arr => {
    let newArr = [];

    for( let value of arr )
        if ( value % 2 === 0 )
            newArr = [ ...newArr, value ];

    return newArr;
};

console.log( pares( [ 0, 1, 2, 3, 4 ] ) ); // [0, 2, 4]
console.log( pares( [ 120, 876, 934, 1298 ] ) ); // [120, 876, 934, 1298]
console.log( pares( [ 7, 921, 43, 9649] ) ); // []