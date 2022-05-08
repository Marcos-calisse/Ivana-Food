const detalleProducto = JSON.parse(localStorage.getItem("productoSeleccionado"));

let productSelect = ``;

productSelect = `<div class="container px-4 px-lg-5 my-5">
<div class="row gx-4 gx-lg-5 align-items-center">
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${detalleProducto.imagen}" alt="..." /></div>
    <div class="col-md-6">
        <div class="small mb-1" id="idProd">ID producto: ${detalleProducto.id}</div>
        <h1 class="display-5 fw-bolder" id="tituloProd">${detalleProducto.nombre}</h1>
        <div class="fs-5 mb-5">
            <span id="precioProd">$${detalleProducto.precio}</span>
        </div>
        <p class="lead">Detalle de cada porducto</p>
        <div class="d-flex">
            <a href="./index.html" class="btn btn-outline-success flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                <- Atras
            </a>
        </div>
    </div>
</div>
</div>`

function imprimirCard () {
    document.getElementById("contenderCard").innerHTML = productSelect;
}

imprimirCard()