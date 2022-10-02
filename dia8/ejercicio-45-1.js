const productosBaratos = products => {
    let newArr = [];

    for( let product of products )
        if ( product.precio >= 5 && product.precio <= 10 )
            newArr = [ ...newArr, product.nombre ];

    return newArr;
};

let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  console.log( productosBaratos( prods ) ); // ["Arroz", "Tomate"]