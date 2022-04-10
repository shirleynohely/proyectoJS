const URL = `${window.location.origin}/js/productos.json`

const getData = (URL) => {
  fetch(URL)
  .then((response)=>response.json())
  .then((data) => {
    const contenidoDisponible = data
    contenidoDisponible.forEach(contenido => {
      infoMostar += retornarContenido(contenido)
      contenidoDOM.innerHTML = infoMostar
    })
  })
  .catch((error)=>{
    contenidoDOM.innerHTML = retornoError()
  })
  
}

document.addEventListener("DOMContentLoaded", () =>{ 
  setTimeout(() => {
    getData(URL)
  }, 1000)    
} )


let infoMostar = ""
let dataJson = []
const contenidoDOM = document.querySelector("#contenido")

const retornarContenido = (contenido) =>{
  const {producto, precio, imagen} = contenido
    let HTMLprod = ""
    HTMLprod += `<div>
                    <div>
                      <div>
                          <img src="${imagen}" title="${producto}">
                      </div>
                      <div>
                          <p><b>$${precio}</b></p>
                          <p>${producto}</p>
                      </div>
                      <div class="consultar">
                      <a href="javascript:void(0)" role="button" class="secondary" id="consultar">Agregar</a>
                      </div>
                  </div>
            </div>`
  return HTMLprod
}
const retornoError = ()=> {
  let HTMLError = `<div> 
                        <br><br> 
                        <br><br> 
                        <h4>El contenido parece no estar disponible. Intente nuevamente.</h4> 
                    </div>`
     return HTMLError
}

// const producto = document.getElementById('producto')
// const cantidad = document.getElementById('cantidad')
// const precio = document.getElementById('precio')
// const subtotal = calcSub(cantidad,precio)


// function calcSub(cantidad,precio){
//   return cantidad*precio
// }


// let arrayProductos = []
// const tablaProductos = document.getElementById("tablaProductos")

// const agregarProducto = () =>{
  
//     if (localStorage.getItem("DatosForm") != null) {     
//         arrayProductos = JSON.parse(localStorage.getItem("DatosForm"))
//         document.getElementById('tablap').style.display = "block"
//         let listado = ""
//        for (p of arrayProductos){ 
//         listado += 
//         `<tr>
//         <th>${p.producto}</th>
//         <th>${p.cantidad}</th>
//         <th>${p.precio}</th>
//         <th name="subtotales">${p.subtotal}</th>
//         <td><button class='secondary' onclick='eliminarProducto(this)'>Eliminar</button></td>
//         </tr>`
//         }   
//         tablaProductos.innerHTML = listado
//         calcularTotal()        
//     }
// }
// agregarProducto()

// function calcularTotal(){
//   let total = document.getElementById('total')
//   let subtotales = document.getElementsByName('subtotales')
//     let sumar = 0
//     for (let index = 0; index < subtotales.length; index++) {
//         sumar += parseInt(subtotales[index].innerHTML)
//     }
//     total.innerHTML="$"+sumar
// }

// function eliminarProducto(p){

//     const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: 'btn btn-success',
//           cancelButton: 'btn btn-danger'
//         },
//         buttonsStyling: false
//       })
      
//       swalWithBootstrapButtons.fire({
//         title: '¿Estás seguro de eliminar el producto?',
//         text: "No podrás regersarlo",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Sí, eliminarlo!',
//         cancelButtonText: 'No, cancelar!',
//         reverseButtons: true
//       }).then((result) => {
//         if (result.isConfirmed) {
//         p.parentElement.parentElement.remove() //Eliminar producto de la lista
//           swalWithBootstrapButtons.fire(
//             'Producto eliminado!',
//             'El producto se ha eliminado.',
//             'success'
//           )
//           calcularTotal()
//         } else if (
//           result.dismiss === Swal.DismissReason.cancel
//         ) {
//           swalWithBootstrapButtons.fire(
//             'Cancelado',
//             'Cancelar para salir',
//             'error'
//           )
//         }
//       })  
// }

// limpiar.addEventListener('click',limpiarForm = () =>{
//     document.getElementById('form').reset()
    
// })

