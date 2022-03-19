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

//validarUsuario(nombreUsuario, contrasenia, email);


// Funcion genedora de cards

function generarCards(productos){
    let acumuladorDeCards = ``;
    productos.forEach((producto)=>{
        acumuladorDeCards += `<div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>`;
    });
    imprimirCardsEnHTML(acumuladorDeCards)
}

// Funcion mostrar cards

function imprimirCardsEnHTML(cards){
    document.getElementById("cards").innerHTML = cards ;
}

function buscadorProductos () {
    const productoEncontrado = document.getElementById("input").value.toLowercase();
    
}
// Objeto constructor

// class Productos{
//     constructor (id, nombre, precio, stock){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
    
// }



// array de productos


const listaProductos = [
    {id: 1,
     nombre: "Pachata", 
     precio: 600, 
     stock: 10,
     imagen: "/multimedia/pachata.jpeg"
    },
    {id: 2, 
     nombre: "Lomo", 
     precio:800, 
     stock: 10,
     imagen: "/multimedia/lomo-ivana.jpeg"
    },
    {id: 3, 
     nombre: "Hamburguesa", 
     precio: 400, 
     stock: 10,
     imagen: "/multimedia/hamburguesa.jpeg"
    }
];


generarCards(listaProductos);

