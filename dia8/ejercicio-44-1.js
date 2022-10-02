const multiplicar = ( arr, number ) => {
    let newArr = [];

    for( let value of arr )
        newArr = [ ...newArr, value * number ];

    return newArr;
}; 

console.log(multiplicar( [ 1, 2, 3 ], 2 ) ); // [2, 4, 6]
console.log(multiplicar( [ 7, 4 ], 3 ) ); // [21, 12]
console.log(multiplicar( [], 10 ) ); // []