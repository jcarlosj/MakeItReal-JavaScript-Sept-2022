const
    weight = Number( prompt( 'Ingrese su peso en kg' ) ),         // 57
    height = Number( prompt( 'Ingrese su altura en mts' ) ),     // 1.66
    bmi = weight / height**2;

console.log( `Tu BMI es ${ bmi }` );    // Tu BMI es 20.685150239512268

if( bmi < 18.5 )
    console.log( 'Bajo de peso' );
else if( bmi < 24.9 )
    console.log( 'Normal' );
else if( bmi < 29.9 )
    console.log( 'Sobrepeso' );
else
    console.log( 'Obeso' );