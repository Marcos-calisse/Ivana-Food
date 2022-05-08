const storageCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carrito = storageCarrito;
document.getElementById("cantidad-producto").innerHTML = carrito.length;
console.log(carrito)