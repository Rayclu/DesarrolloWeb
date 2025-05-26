import { ProductTemplate } from '../dist/productoPlantilla.js';

function createProduct(name, { stock, price, category }) {
    return new ProductTemplate(stock, price, name, category);
}

document.addEventListener("DOMContentLoaded", () => {
    const newProductButton = document.getElementById("CreateProductId");
    if (newProductButton) {
        newProductButton.addEventListener("click", () => {
            const productName = prompt("Nombre del producto");
            const stock = parseInt(prompt("Ingrese el stock"));
            const price = parseInt(prompt("Ingrese el precio"));
            const category = prompt("Ingrese la categoría");

            const product = createProduct(productName, { stock, price, category });
            alert(`El producto es el siguiente: ${JSON.stringify(product)}`);
        });
    }
});