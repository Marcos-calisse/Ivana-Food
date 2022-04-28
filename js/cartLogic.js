const storageCarrito = JSON.parse(localStorage.getItem("carrito"));
const carrito = storageCarrito;
document.getElementById("cantidad-producto").innerHTML = carrito.length;