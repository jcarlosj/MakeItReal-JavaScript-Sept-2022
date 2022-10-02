const posPares = arr => {
    let newArr = [];

    for( let [ key, value ] of Object.entries( arr ) )
        if ( key % 2 === 0 )
            newArr = [ ...newArr, value ];

    return newArr;
}; 

console.log( posPares( [ "a", "b", "c"] ) ); // ["a", "c"]
console.log( posPares( [ 0, 1, 2, 3, 4 ] ) ); // [0, 2, 4]
console.log( posPares( [] ) ); // []