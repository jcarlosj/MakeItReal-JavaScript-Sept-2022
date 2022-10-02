const promedio = ( values ) => {
    const valorInicial = 0;
    const totalSumatoria = values.reduce( ( valorPrevio, valorActual ) => valorPrevio + valorActual, valorInicial ); 
    
    return totalSumatoria / values.length;
}

console.log( promedio( [ 1, 2, 3, 4 ] ) );  // 2.5
console.log( promedio( [ 7, 8, 9 ] ) );     // 8
console.log( promedio( [ 300, 100 ] ) );    // 200