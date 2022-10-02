const 
    number1 = Number( prompt( 'Ingrese un número' ) ),
    number2 = Number( prompt( 'Ingrese otro número' ) );

const suma = ( num1, num2 ) => num1 + num2;

console.log( suma( number1, number2 ) );

console.log( suma( 1, 2 ) );        // 3
console.log( suma( 0, 0 ) );        // 0
console.log( suma( 245, 923 ) );    // 1168