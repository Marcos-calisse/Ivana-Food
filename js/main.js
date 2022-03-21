let pachatas = 600;
let lomos = 800;
let Hamburguesas = 400;
const carrito = [];

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
    },
    {id: 4, 
     nombre: "Papas fritas", 
     precio: 250, 
     stock: 10,
     imagen: "http://c.files.bbci.co.uk/104B4/production/_103104766_gettyimages-957724442.jpg"
    }
];

// Funcion carrito de compras --> llamo la funcion desde el html


const carritoDeCompras = () =>{
    const totalDelCarrito = listaProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    return totalDelCarrito;
}


// Funcion agregar porductos al carrito como lista de productos

const agregarAlCarrito = (producto) =>{
    carrito.push(producto)
}

// Funcion genedora de cards

function generarCards(productos){
    let acumuladorDeCards = ``;
    productos.forEach((producto)=>{
        acumuladorDeCards += `<div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(listaProductos)">Comprar</button>
        </div>
      </div>`;
    });
    imprimirCardsEnHTML(acumuladorDeCards)
}

// Funcion mostrar cards

function imprimirCardsEnHTML(cards){
    document.getElementById("cards").innerHTML = cards ;
}

generarCards(listaProductos);


// Funcion login

function generarFormLogin (){
    const datosUsuario = document.getElementById("login");
    datosUsuario.innerHTML = `<div class="contact__secction-container">
    <div class="row">
      <div class="contact__secction__item">
        <label>Nombre Usuario</label>
        <input type="text" id="nombre" placeholder="Ingresa tu usuario"/>
      </div>
      <div class="contact__secction__item">
        <label>E-mail</label>
        <input type="text" id="mail" placeholder="E-mail"/>
      </div>
      <div class="contact__secction__item">
        <label>Contraseña</label>
        <input type="password" id="contraseña" placeholder="Contraseña"/>
      </div>
      <div class="contact-button">
        <button type="button" class="btn btn-danger" onclick = "validarUsuario()">Ingresar</button>
      </div>
    </div>
  </div>`;
}



const validarUsuario = () => {

    const nombreIngresado = document.getElementById("nombre").value;
    const email = document.getElementById("mail").value.innerText;
    const contrasenia = document.getElementById("contraseña").value;
    
    if (nombreIngresado === "Marcos" && contrasenia === 12345 && email === "mcalisse@gmail.com" ){

        alert(`Bienvenido ${nombreIngresado}`)

    }else{
        alert(`Vuelve a intentarlo`)
    }
}







