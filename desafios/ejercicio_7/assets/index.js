//Desafios 1 a 4

// const nombreProducto = "Bring me to life"

// const precioUnic =  10000 
// const cantidad = parseInt(prompt('Cuantas unidades quiere llevar?'))

// const sumarProductos = (precioUnic, cantidad) => {
//    const descuento =  cantidad >= 5 ? ((precioUnic * 20)/100) : 0;
//    return (precioUnic * cantidad) - descuento
// };


// alert(`Usted llevará,${cantidad} unidades de ${nombreProducto} (${precioUnic}), costo total: ${sumarProductos(precioUnic, cantidad)}`)

//-------------------------------------------------------------------------------------------------------------------------------------------------
//Desafio 6

// const producto = {
//     "nombre" : "Remera",
//     "marca" : "Adidas",
//     "imagen" : "url",
//     "precio" : 100000,
//     "stock" : 5
// };
// console.log(`Producto original: \n\t ${producto}`)

// producto.nombre = "Zapatillas";
// producto.marca = "Converse";
// producto.categoria = "Calzado";
// console.log(`Producto modificado: \n\t ${producto}`)


// delete producto.stock; console.log(`Producto sin stock: \n\t ${producto}`)

// Desafio 7.
const product = {
    nombre: document.getElementById("nombreProducto"),
    precio: document.getElementById("precioProducto")
};
console.log(typeof(product));
product.nombre.style.color = "Red";
product.precio.innerText = "$450";

