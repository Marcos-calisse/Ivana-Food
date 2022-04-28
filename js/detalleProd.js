const detalleProducto = JSON.parse(localStorage.getItem("productoSeleccionado"));
console.log(detalleProducto)

let idProducto = document.getElementById("idProd") .innerHTML = `ID producto: ${detalleProducto.id}`;
console.log(idProducto)

let precioProducto = document.getElementById("precioProd") .innerHTML = `$ ${detalleProducto.precio}`;
console.log(precioProducto)

let nombreProducto = document.getElementById("tituloProd") .innerHTML = detalleProducto.nombre;
console.log(nombreProducto)

let imgenproducto = document.getElementById("imgProd") .innerHTML = detalleProducto.imagen;
