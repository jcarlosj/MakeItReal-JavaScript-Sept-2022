const productosBaratos = products => products
    .filter( product => product.precio >= 5 && product.precio <= 10 )
    .map( product => product.nombre );

let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  console.log( productosBaratos( prods ) ); // ["Arroz", "Tomate"]