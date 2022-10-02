const
    weight = Number( prompt( 'Ingrese su peso en kg' ) ),      // 57
    height = Number( prompt( 'Ingrese su altura en mts' ) ),   // 1.66
    bmi = weight / height**2;

console.log( `Tu BMI es ${ bmi }` );    // Tu BMI es 20.685150239512268