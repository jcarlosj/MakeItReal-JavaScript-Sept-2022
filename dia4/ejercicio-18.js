let names = [ 'Pedro', 'Pablo', 'María', 'Juan', 'Diana' ];

names.push( prompt( 'Ingresa un nombre' ) );              // Inserta nombre en la ultima posicion
names.splice( 2, 1, prompt( 'Ingresa otro nombre' ) );    // Reemplazar tercera posicion del arreglo

names.forEach( name => console.log( name ) );