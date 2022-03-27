const actualizarStorage = (carrito) => {
  localStorage.setItem("carro", JSON.stringify(carrito));
};

let pachatas = 600;
let lomos = 800;
let Hamburguesas = 400;

const carrito = [];
if (localStorage.getItem("carro")) {
  carrito = JSON.parse(localStorage.getItem("carro"));
  carritoDeCompras();
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
   imagen: "https://images.deliveryhero.io/image/pedidosya/products/16480133-07c02758-51e5-48bc-848a-958de32372f0.jpeg?quality=90&width=248"
  },
  {id: 2, 
   nombre: "Lomo", 
   precio:800, 
   stock: 10,
   imagen: "https://www.circuitogastronomico.com/wp-content/uploads/2020/08/pizzar-lomo.jpg"
  },
  {id: 3, 
   nombre: "Hamburguesa", 
   precio: 400, 
   stock: 10,
   imagen: "https://okdiario.com/img/2021/05/28/hamburguesa-3-655x368.jpg"
  },
  {id: 4, 
   nombre: "Papas fritas", 
   precio: 250, 
   stock: 10,
   imagen: "http://c.files.bbci.co.uk/104B4/production/_103104766_gettyimages-957724442.jpg"
  },
  { id: 5, 
    nombre: "Pizza Peperoni", 
    precio: 950, 
    stock: 10,
    imagen: "https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png"
  },
  { id: 6, 
    nombre: "Barroluco", 
    precio: 1000, 
    stock: 10,
    imagen: "https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2021/02/05/barros_1.jpg"
  }

];



// Funcion carrito de compras --> llamo la funcion desde el html

let modalCarrito = document.getElementById("carro");
  
const carritoDeCompras = () => {
  let total = 0;
  modalCarrito.innerHTML = "";
  if (carrito.length > 0) {
    carrito.forEach(() => {
      total = total + listaProductos.precio;
      modalCarrito.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h6> ${listaProductos.nombre}</h6>
            <h6> ${listaProductos.id}</h6>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>`;
    });
    // Dibujo el total y lo appendeo en el div capturado y guardado en la variable modalCarrito
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
     <button class= "btn btn-danger finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
    modalCarrito.appendChild(totalContainer);
  }
  
};


// Funcion agregar porductos al carrito como lista de productos

const agregarAlCarrito = () =>{
  carrito.push(listaProductos.id)
}
console.log(carrito)
// Funcion genedora de cards

function generarCards(productos){
    let acumuladorDeCards = ``;
    productos.forEach((producto)=>{
      acumuladorDeCards += `
      <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$ ${producto.precio}</p>
          <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
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
  datosUsuario.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
          <label>Nombre Usuario</label>
          <input type="text" id="nombre" placeholder="Ingrese usuario">
          </div>
          <div class="mb-3">
          <label>E-mail</label>
          <input type="text" id="mail" placeholder="E-mail">
          </div>
          <div class="mb-3">
            <label>Contraseña</label>
            <input type="password" id="contraseña" placeholder="Contraseña">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button id="botonIngresar" type="button" class="btn btn-danger" onclick = "validarUsuario()">Ingresar</button>
      </div>
    </div>
  </div>
 </div>
 `;
}



const validarUsuario = () => {

    const nombreIngresado = document.getElementById("nombre").value;
    const email = document.getElementById("mail").value;
    const contrasenia = document.getElementById("contraseña").value;
    
    if (nombreIngresado === "Marcos" && contrasenia === "12345" && email === "mcalisse@gmail.com" ){

        alert(`Bienvenido ${nombreIngresado}`)

    }else{
        alert(`Vuelve a intentarlo`)
    }
}




