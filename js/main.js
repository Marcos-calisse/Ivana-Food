let pachatas = 600;
let lomos = 800;
let Hamburguesas = 400;
const carrito = [];

// Funcion carrito de compras --> llamo la funcion desde el html


const carritoDeCompras = (producto, precio, cantidadPedido) =>{
    
    let resultado = precio * cantidadPedido;

    console.log(`Elegiste ${cantidadPedido} ${producto} por un total de ${resultado}`)
}


// Funcion agregar porductos al carrito como lista de productos

const agregarAlCarrito = (producto) =>{
    carrito.push(producto)
}


// Funcion login

// let nombreUsuario = prompt("Ingresa tu usuario");
// let contrasenia = parseInt(prompt("Ingresa tu contraseña"));
// let email = prompt("Ingresa tu emmail");

const validarUsuario = (nombreIngresado, contrasenia, email) => {
    if (nombreIngresado == "Marcos" && contrasenia == 12345 && email == "mcalisse@gmail.com" ){
        alert(`Bienvenido ${nombreUsuario}`)
    }else{
        alert(`Vuelve a intentarlo`)
    }
}


// validarUsuario(nombreUsuario, contrasenia, email);



// Objeto constructor

class Productos{
    constructor (id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
}
const nuevoProducto = new Productos ( 4,"papas fritas", 250, 10);



// array de productos


const listaProductos = [
    {id: 1,
     nombre: "pachata", 
     precio: 600, 
     stock: 10,
     img: src="js/multimedia/pachata,jpeg"
    },
    {id: 2, 
     nombre: "lomo", 
     precio:800, 
     stock: 10,
    img: src="js/multimedia/lomo-ivana,jpeg" 
    },
    {id: 3, 
     nombre: "hamburguesa", 
     precio: 400, 
     stock: 10,
     img: src="js/multimedia/hamburguesa,jpeg"
    }
];

listaProductos.push({id: 4, nombre: "papas fritas", precio: 250, stock: 10}); // agrega objeto al array


agregarAlCarrito();

// let cardsGeneradas = ``;

// listaProductos.forEach(elementoDelArray => {
//   cardsGeneradas += `<div class="card">
//                         <div class="card-header">
//                             ${elementoDelArray.nombre}
//                         </div>
//                         <div class="card-body">
//                             <h5 class="card-title">$ ${elementoDelArray.precio}</h5>
//                             <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                             <a href="#" class="btn btn-primary" onclick="agregarAlCarrito()">Go somewhere</a>
//                         </div>
//                     </div>`;
// })

// document.getElementById("cards");

