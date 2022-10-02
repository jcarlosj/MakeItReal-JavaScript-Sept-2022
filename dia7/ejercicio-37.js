const buscarProducto = ( products, index ) => {
    let found = null;

    for( let product of products )
        if( product.id === index )
            found = product;

    return found;
}

let productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
];
console.log( buscarProducto( productos, 1 ) ); // { id: 1, nombre: "A" }


productos = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
];
console.log( buscarProducto( productos, 566 ) ); // null