const max = numbers => {
    const valorInicial = 0;

    return numbers.reduce( ( valorPrevio, valorActual ) => valorPrevio < valorActual 
        ? valorActual : valorPrevio,
        valorInicial
    );
}

console.log( max( [ 1, 2, 3, 4 ] ) ); // 4
console.log( max( [ 63, 85, 39, 24, 3 ] ) ); // 85