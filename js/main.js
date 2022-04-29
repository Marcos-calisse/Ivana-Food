
// array de productos
const listaProductos = [
  { id: 1,
    nombre: "Pachata", 
    precio: 600, 
    stock: 10,
    imagen: "https://images.deliveryhero.io/image/pedidosya/products/16480133-07c02758-51e5-48bc-848a-958de32372f0.jpeg?quality=90&width=248"
  },
  { id: 2, 
    nombre: "Lomo", 
    precio:800, 
    stock: 10,
    imagen: "https://www.circuitogastronomico.com/wp-content/uploads/2020/08/pizzar-lomo.jpg"
  },
  { id: 3, 
    nombre: "Hamburguesa", 
    precio: 400, 
    stock: 10,
    imagen: "https://okdiario.com/img/2021/05/28/hamburguesa-3-655x368.jpg"
  },
  { id: 4, 
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

const actualizarStorage = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Funcion que remueve productos del carrito

const removeProduct = (indice) => {

  const indiceProd = carrito.findIndex((elemento) => {
    return elemento.id === indice;
  });

  carrito.splice(indiceProd, 1);

  actualizarStorage(carrito);

};


// Funcion carrito de compras --> llamo la funcion desde el html

const carritoDeCompras = () => {

  if(carrito == ""){

    document.getElementById("productosAgregados").innerHTML = `"Tu carrito esta vacío"`;

  }else{
    let acumuladorProductos = ``;

    carrito.forEach((elemento) => {
    
    acumuladorProductos += `
    <div class="container">
      <img class="car-img" src="${elemento.imagen}"/>
      <div class="product-details">${elemento.nombre}</div>
      <div class="product-details">Precio: $${elemento.precio}</div>
      <div class="product-details">Subtotal: $</div>
      <button class="btn btn-danger"  id="remove-product" onclick = "removeProduct(${elemento.id})">Eliminar producto</button>
    </div>`;
    
    });
  
    actualizarStorage(carrito);

    mostrarProdEnCarrito(acumuladorProductos);
  }
  
  

};

// Funcion que calcula el total del carrito
const calcularTotalCarrito = () => {

  const totalCarrito = carrito.reduce((accum, element) => accum + element.precio, 0);

  document.getElementById("totalCarrito").innerHTML = `El total de tu compra es $${totalCarrito}`;
  
}

//Funcion que muestra los productos en el carrito

function mostrarProdEnCarrito(arrayProductos){
  document.getElementById("productosAgregados").innerHTML = arrayProductos;
}


// Funcion agregar productos al carrito

const agregarAlCarrito = (indiceProducto) =>{

  const indiceEncontradoProducto = listaProductos.findIndex((elemento) => {
    return elemento.id === indiceProducto;
  });

  const productoAgregado = listaProductos[indiceEncontradoProducto]
  
  carrito.push(productoAgregado);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  Toastify({
    text: `Agregaste al carrito ${productoAgregado.nombre}`,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

  document.getElementById("cantidad-producto").innerHTML = carrito.length;
  

  calcularTotalCarrito();
}

// funcion que te lleva al detalle del producto

const irAlDetalleProducto = (indiceProducto) =>{

  const indiceEncontradoProducto = listaProductos.findIndex((elemento) => {
    return elemento.id === indiceProducto;
  });
  const productoEncontrado = listaProductos[indiceEncontradoProducto];

  localStorage.setItem("productoSeleccionado", JSON.stringify(productoEncontrado));
  
}


// Funcion genedora de cards

function generarCards(){
  
    let acumuladorDeCards = ``;
    listaProductos.forEach((producto)=>{
      acumuladorDeCards += `
      <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$ ${producto.precio}</p>
          <div>
            <input class="inputCarrito" value=1 min=1 type="number" placeholder="">
          </div>
          <a href = "./detalleProducto.html" class="btn btn-outline-success" onclick="irAlDetalleProducto(${producto.id})">
            Ver mas
          </a>
          <button class="btn btn-outline-success" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
        </div>
      </div>`;
    });
    imprimirCardsEnHTML(acumuladorDeCards)
}

// Funcion que muestra las cards en el html

function imprimirCardsEnHTML(cards){
  document.getElementById("cards").innerHTML = cards ;
}

generarCards(listaProductos);


// Funcion login

const validarUsuario = () => {

  const nombreIngresado = document.getElementById("nombre").value;
  const email = document.getElementById("mail").value;
  const contrasenia = document.getElementById("contraseña").value;
  
  nombreIngresado == "Marcos" && contrasenia == 12345 && email == "mcalisse@gmail.com" ? swal(`Bienvenido ${nombreIngresado}`, "-haz click para ingresar!", "success") : swal(`Vuelve a intentarlo`);
  
}

function generarFormLogin (){
  const datosUsuario = document.getElementById("login");
  datosUsuario.innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  </div>`;
}




