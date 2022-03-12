let pachatas = 600;
let lomos = 800;
let Hamburguesas = 400;


// Funcion carrito de compras


const carritoDeCompras = (producto, precio, cantidadPedido) =>{
    
    let resultado = precio * cantidadPedido;

    console.log(`Elegiste ${cantidadPedido} ${producto} por un total de ${resultado}`)
}


// Funcion login

let nombreUsuario = prompt("Ingresa tu usuario");
let contrasenia = parseInt(prompt("Ingresa tu contraseña"));
let email = prompt("Ingresa tu emmail");

const validarUsuario = (nombreIngresado, contrasenia, email) => {
    if (nombreIngresado == "Marcos" && contrasenia == 12345 && email == "mcalisse@gmail.com" ){
        alert(`Bienvenido ${nombreUsuario}`)
    }else{
        alert(`Vuelve a intentarlo`)
    }
}



validarUsuario();

carritoDeCompras("lomos", lomos, 2);


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
     stock: 10
    },
    {id: 2, 
     nombre: "lomo", 
     precio:800, 
     stock: 10
    },
    {id: 3, 
     nombre: "hamburguesa", 
     precio: 400, 
     stock: 10
    }
];


listaProductos.push({id: 4, nombre: "papas fritas", precio: 250, stock: 10}); // agrega objeto al array
console.log(listaProductos);

console.log(listaProductos[1].nombre); // devuelve el valor de la propiedad en la posicion del indice

listaProductos.pop();                  // elimina el ultimo indice del array
console.log(listaProductos);

listaProductos.reverse();              // da vuelta el array
console.log(listaProductos);

